/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
    localeDetection: true,
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
