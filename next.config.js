// module.exports = {
//   reactStrictMode: true,
// }
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_MAPS_API_KEY: "AIzaSyB68BIJkMeQLuHc2eXW5UOVGnzIPKfs7Hg",
    TRIP_ADVISOR_API_KEY:"0ad5345e3cmsh0252cb9761788fep1c8b4fjsnd3a3740b38c1"
  },
  eslint: { ignoreDuringBuilds: true } 
};

module.exports = nextConfig;

