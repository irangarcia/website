import { ImageResponse } from '@vercel/og'
import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
  
};

export default async function handler(request: NextRequest): Promise<ImageResponse> {
  try {
    const { searchParams } = request.nextUrl;
    const fallbackImage = `${new URL(request.url).origin}/og-image-test.png`
    const title = searchParams.get('title');
    
    if (title == null || title === '') {
      return NextResponse.redirect(fallbackImage, { status: 308 });
    }

    const font = await fetch(new URL('/public/Inter-Regular.otf', import.meta.url))
      .then(response => response.arrayBuffer());

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
              fontSize: 40,
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
            data: font,
            style: 'normal',
            weight: 400
          },
        ],
      },
    );
  } catch (error) {
    const fallbackImage = `${new URL(request.url).origin}/og-image-test.png`

    return NextResponse.redirect(fallbackImage, { status: 307 });
  }
}
