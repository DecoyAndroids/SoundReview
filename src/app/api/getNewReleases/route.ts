import axios from 'axios';
import { NextResponse } from 'next/server';
import { getSpotiToken } from '~/app/actions/tokenSpoti';

export async function GET() {
  try {
    const accessToken = await getSpotiToken();
    if (accessToken?.access_token == null){
      return
    }
    const response = await axios.get(
      `https://api.spotify.com/v1/browse/new-releases?limit=12&offset=0`,
      {
        headers: {
          Authorization: `Bearer ${accessToken.access_token}`,
        },
      }
    );
    if (!response.data) {
      return NextResponse.json({ error: 'Empty response from Spotify' }, { status: 500 });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error', details: error }, { status: 500 });
  }
}
