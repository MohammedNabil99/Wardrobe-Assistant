// // next.config.js
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["kpzunzfvjdqvjnqprdxx.supabase.co"],
//   },
//   // other configurations
// };

// module.exports = nextConfig;

// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kpzunzfvjdqvjnqprdxx.supabase.co", // Replace with your Supabase domain
        port: "",
        pathname: "/storage/v1/object/public/images/uploads/**",
      },
    ],
  },
};
