/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'flagsapi.com',
            port: '',
            pathname: '/**',
        }, ],
    }
}

module.exports = nextConfig