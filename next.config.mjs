/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.awsli.com.br'
            },
            {
                protocol: 'https',
                hostname: 'www.atacadocollections.com'
            },
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com'
            },
            {
                protocol: 'https',
                hostname: 'acdn-us.mitiendanube.com'
            },
            {
                protocol: 'https',
                hostname: 'www.oderco.com.br'
            },
            {
                protocol: 'https',
                hostname: 'marketup-cdn.s3-us-west-2.amazonaws.com'
            },
            {
                protocol: 'https',
                hostname: 'imusic.b-cdn.net'
            },
            {
                protocol: 'https',
                hostname: 'storage.geralgeek.com.br'
            }
        ]
    }
};

export default nextConfig;
