/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    env: {
        supabaseUrl: process.env.supabaseUrl || 'supabaseUrl',
        supabaseKey: process.env.supabaseKey || 'supabaseKey',
        spotifyClientId : process.env.spotifyClientId || 'spotifyClientId',
        spotifyClientSecret : process.env.spotifyClientSecret || 'spotifyClientSecret',
      },
    images: {
      domains: ["i.scdn.co","nangrsdqlranxkijphem.supabase.co","data:image"], // Разрешает изображения с example.com
      },
};

export default config;

