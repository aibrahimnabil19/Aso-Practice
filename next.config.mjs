/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'loveweddingsng.com',
      },
      {
        protocol: 'https',
        hostname: 'ae01.alicdn.com',
      },
      {
        protocol: 'https',
        hostname: 'africstylefashion.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mgkente.com',
      },
      {
        protocol: 'https',
        hostname: 'i.etsystatic.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'massaweadventures.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bellanaijastyle.com',
      },
      {
        protocol: 'https',
        hostname: 'www.theconsciouskitchen.co.za',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ]
  }
};

export default nextConfig;
