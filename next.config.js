/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        reactCompiler: true
    },
    sassOptions: {
        additionalData: '@use \'~/src/styles/global.scss\' as *;',
        api: 'modern-compiler'
    }
}

module.exports = nextConfig
