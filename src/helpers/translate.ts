export const dt = (item: unknown, key: string, locale: string) => {
    const typedItem = item as unknown as { translations: { [key: string]: unknown
        languages_code: { abbreviation: string } }[] }

    const translatedFields = typedItem?.translations?.find((translation) => translation.languages_code.abbreviation === locale)

    return translatedFields?.[key as string] as string
}
