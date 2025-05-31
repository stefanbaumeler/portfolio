export const recursivelyCleanDaytrips = (visitsToClean: [Date, Date][]): [Date, Date][] => {
    let removeNext = false
    let mustCleanMore = false

    const cleaned = visitsToClean.map((visitToClean, key) => {
        if (removeNext) {
            removeNext = false
            return undefined
        }

        const next = visitsToClean[key + 1]
        if (!next) {
            return visitToClean
        }

        const departureSameAsNextArrival = +next[0] - +visitToClean[1] <= 23 * 60 * 60 * 1000

        if (departureSameAsNextArrival) {
            mustCleanMore = true
            removeNext = true

            return [visitToClean[0], next[1]]
        }
        else {
            return visitToClean
        }
    }).filter((visitToClean) => !!visitToClean)

    if (mustCleanMore) {
        return recursivelyCleanDaytrips(cleaned as [Date, Date][])
    }

    return cleaned as [Date, Date][]
}
