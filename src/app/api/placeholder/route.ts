import { NextResponse } from 'next/server';
import album_placeholder2 from '~/public/newReleasesCover/album_placeholder2.jpg'

export async function GET() {
  try {
    return NextResponse.json(album_placeholder2);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error', details: error }, { status: 500 });
  }
}
