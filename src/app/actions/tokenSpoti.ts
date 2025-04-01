import axios from "axios";


interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export async function getSpotiToken() {
  try {
    const authString = `${process.env.spotifyClientId}:${process.env.spotifyClientSecret}`;
    const authBase64 = Buffer.from(authString).toString('base64');
  
    const response = await axios.post<SpotifyTokenResponse>(
      'https://accounts.spotify.com/api/token',
      'grant_type=client_credentials',
      {
        headers: {
          Authorization: `Basic ${authBase64}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    return null;
  }
}