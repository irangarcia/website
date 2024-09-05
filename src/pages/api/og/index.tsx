// /pages/api/og.jsx
import { ImageResponse } from '@vercel/og'
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(request: NextRequest): Promise<ImageResponse> {
  try {
    const { searchParams } = request.nextUrl;
    const fallbackImage = `${new URL(request.url).origin}/og-image.png`
    const title = searchParams.get('title');
    
    if (title == null || title === '') {
      return NextResponse.redirect(fallbackImage, { status: 308 });
    }

    const fontData = await loadGoogleFont('Inter', title);

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            fontFamily: '"Inter"',
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '70px',
            backgroundColor: '#fdfdfc',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
              fontSize: 34,
              color: '#64645e',
            }}
          >
            Iran Garcia
            <span style={{ fontSize: 72, color: '#21201c', fontWeight: 500 }}>
              {title}
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    );
  } catch (error) {
    const fallbackImage = `${new URL(request.url).origin}/og-image.png`

    return NextResponse.redirect(fallbackImage, { status: 307 });
  }
}

export async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`;

  const css = await (await fetch(url)).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const res = await fetch(resource[1]);
    if (res.status == 200) {
      return await res.arrayBuffer();
    }
  }

  throw new Error('failed to load font data');
}
