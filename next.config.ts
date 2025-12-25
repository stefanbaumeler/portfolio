import createNextIntlPlugin from 'next-intl/plugin'
import { webpack } from 'next/dist/compiled/webpack/webpack'
import { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
    reactStrictMode: true,
    reactCompiler: true,
    sassOptions: {
        additionalData: '@use \'~/src/styles/global.scss\' as *;',
        api: 'modern-compiler'
    },
    webpack: (config: webpack.Configuration, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                child_process: false
            }
        }

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
        dangerouslyAllowSVG: true,
        minimumCacheTTL: 31536000,
        remotePatterns: [{
            protocol: 'http',
            hostname: '157.180.93.120',
            port: '8061',
            pathname: '/assets/**'
        }],
        qualities: [75, 100]
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
