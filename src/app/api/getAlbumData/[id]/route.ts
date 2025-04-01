import type { NextRequest } from 'next/server'; // Use "import type" to resolve the warning
import { NextResponse } from 'next/server';
import { getSpotiToken } from '~/app/actions/tokenSpoti';

interface AlbumDataResponse {
  album_type : string;
  total_tracks: number;
  available_markets : Array<string>
  external_urls: {
      spotify:string;
  };
  href : string;
  id: string;
  images : {
      url:string;
      height: string;
      width : string;
  }[];
  name: string;
  release_date : string;
  release_date_precision : string;
  restrictions: {
      reason : string;
  };
  type: string;
  uri : string;
  artists : {
      external_urls: {
          spotify:string;
      };
      href : string;
      id : string;
      name : string ;
      type : string ;
      uri : string ;
  }[];
  tracks:{
      href : string;
      limit : number;
      next : string | null;
      offset: number;
      previos : string | null;
      total: number;
      items: {
          artists : {
              external_urls: {
                  spotify:string;
              };
              href : string;
              id : string;
              name : string ;
              type : string ;
              uri : string ;
          }[];   
          available_markets:string[];
          disc_number: number;
          duration_ms: number;
          explicit:boolean;
          external_urls: {
              spotify:string;
          };
          href:string;
          id : string;
          is_playable : boolean;
          linked_from: {
              external_urls: {
                  spotify:string;
              };
              href:string;
              id : string; 
              type:string;
              uri:string;   
          };
          restrictions: {
              reason:string;
          };
          name:string;
          preview_url : string | null;
          track_number: number;
          type : string;
          uri: string;
          is_local: boolean;
      }[];
  };
  copyrights: {
      text:string;
      type:string;
  }[];
  external_ids:{
      isrc: string;
      ean : string;
      upc : string;
  };
  genres: string[];
  label: string;
  popularity: number;
}

interface ErrorRespone{
   error: {
     message: string 
    } 
}

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.pathname.split('/').pop();
    if (!id) {
      return NextResponse.json({ error: 'Bad Request', message: 'Album ID is required' }, { status: 400 });
    }

    const accessToken = await getSpotiToken();
    if (!accessToken?.access_token) {
      return NextResponse.json({ error: 'Unauthorized', message: 'No access token available' }, { status: 401 });
    }

    const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
      headers: { Authorization: `Bearer ${accessToken.access_token}` },
    });

    if (!response.ok) {
      let errorMessage = 'Unknown error';
      try {
        const errorResponse:ErrorRespone  = (await response.json()) as ErrorRespone;
        errorMessage = errorResponse.error?.message ?? JSON.stringify(errorResponse);
      } catch {
        errorMessage = await response.text(); // Fallback to text response
      }

      return NextResponse.json({ error: 'Spotify API error', message: errorMessage }, { status: response.status });
    }


    const albumData: AlbumDataResponse = (await response.json()) as AlbumDataResponse;
    return NextResponse.json(albumData, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ 
      error: 'Internal Server Error', 
      details: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}
