import createNextIntlPlugin from 'next-intl/plugin'
import { webpack } from 'next/dist/compiled/webpack/webpack'
import { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {
        reactCompiler: true
    },
    sassOptions: {
        additionalData: '@use \'~/src/styles/global.scss\' as *;',
        api: 'modern-compiler'
    },
    webpack: (config: webpack.Configuration) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'canvas$': false
        }
        return config
    },
    images: {
        dangerouslyAllowSVG: true,
        minimumCacheTTL: 31536000,
        remotePatterns: [{
            protocol: 'http',
            hostname: '159.65.125.156',
            port: '8061',
            pathname: '/assets/**'
        }]
    },
    headers: async () => {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Accept-CH',
                        value: 'Sec-CH-Prefers-Color-Scheme'
                    },
                    {
                        key: 'Vary',
                        value: 'Sec-CH-Prefers-Color-Scheme'
                    },
                    {
                        key: 'Critical-CH',
                        value: 'Sec-CH-Prefers-Color-Scheme'
                    }
                ]
            }
        ]
    }
}

export default withNextIntl(nextConfig)
