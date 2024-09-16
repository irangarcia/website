import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeExternalLinks from "rehype-external-links";
import {LRUCache} from "lru-cache";

const cache = new LRUCache({ max: 100 }); // Cache up to 100 posts for 1 hour

function getMDXFiles(dir: string) {
  return fs.readdir(dir).then((files) => files.filter((file) => path.extname(file) === ".mdx"));
}

async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: "_blank", rel: ["noreferrer", "noopener"] })
    .use(rehypePrettyCode, {
      theme: {
        light: "github-light",
        dark: "github-light",
      },
      keepBackground: true,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string) {
  if (cache.has(slug)) {
    return cache.get(slug);
  }

  const filePath = path.join("content", `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);

  // Store the result in the cache
  const post = { source: content, metadata, slug };
  cache.set(slug, post);

  return post;
}

async function getAllPosts(dir: string) {
  const mdxFiles = await getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      return getPost(slug); // Using cached version of getPost
    })
  );
}

export async function getBlogPosts() {
  const contentDir = path.join(process.cwd(), "content");
  return getAllPosts(contentDir);
}