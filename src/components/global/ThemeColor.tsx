'use client'

import { useTheme } from 'next-themes'

export const ThemeColor = () => {
    const theme = useTheme()

    return <meta
        name="theme-color"
        content={theme.resolvedTheme === 'dark' ? '#111111' : '#FAFAFA'}
    />
}
