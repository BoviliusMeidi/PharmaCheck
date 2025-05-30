/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [new URL('https://fymbxhctbdfclafdndmn.supabase.co/**')]
    },

    devIndicators: false
};

export default nextConfig;
