/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n:{
    locales:["en","sa"],
    defaultLocale:"sa",
    localeDetection:false,
    
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/smurftec/image/upload/**",
      },
    ],
    domains: ['placeimg.com']
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://gleaming-erin-nematode.cyclic.app/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
