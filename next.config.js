/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.clerk.dev",
      process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL,
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
