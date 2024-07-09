/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
            },
            {
                protocol: "https",
                hostname: "scontent.cdninstagram.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "media4.giphy.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
            }
        ]
    }
};

export default nextConfig;
