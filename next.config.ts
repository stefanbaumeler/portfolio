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
    devIndicators: {
        position: 'bottom-right'
    },
    images: {
        unoptimized: true,
        dangerouslyAllowSVG: true,
        minimumCacheTTL: 31536000,
        remotePatterns: [new URL('http://157.180.93.120:8061/assets/**')]
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
