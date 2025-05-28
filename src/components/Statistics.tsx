import { TransportationTypesStat } from '@/components/stats/TransportationTypesStat'
import { FlightsPerYearStat } from '@/components/stats/FlightsPerYearStat'
import { DaysPerCountryStat } from '@/components/stats/DaysPerCountryStat'
import { DaysPerPlaceStat } from '@/components/stats/DaysPerPlaceStat'
import { AccommodationTypesStat } from '@/components/stats/AccommodationTypesStat'
import { BookingMethodStat } from '@/components/stats/BookingMethodStat'
import { FactStat } from '@/components/stats/FactStat'
import { getTranslations } from 'next-intl/server'

export const Statistics = async () => {
    const t = await getTranslations()

    return <div className="statistics">
        <div className="statistics__grid">
            <TransportationTypesStat order={1} />
            <FlightsPerYearStat order={1} />
            <div className="statistics__group">
                <FactStat
                    title={t('Missed flights')}
                    value={1}
                    type="count"
                    order={2}
                />
                <FactStat
                    title={t('Cancelled flights')}
                    value={6}
                    type="count"
                    order={2}
                />
                <FactStat
                    title={t('Places visited')}
                    value={2}
                    type="count"
                    order={2}
                />
            </div>
            <div className="statistics__group">
                <FactStat
                    title={t('Countries visited')}
                    value={2}
                    type="count"
                    order={2}
                />
                <FactStat
                    title={t('Longest time abroad')}
                    value={'370 days'}
                    type="count"
                    valueSize="small"
                    order={4}
                />
                <FactStat
                    title={t('Passports lost')}
                    value={1}
                    type="count"
                    order={4}
                />
            </div>
            <DaysPerCountryStat order={3} />
            <AccommodationTypesStat order={3} />
            <BookingMethodStat order={5} />
            <DaysPerPlaceStat order={5} />
            <FactStat
                title={t('Traffic accidents')}
                value={2}
                type="count"
                order={4}
            />
            <FactStat
                title={t('Hospital visits abroad')}
                value={9}
                type="count"
                order={4}
            />
            <FactStat
                title={t('Dog bites')}
                value={1}
                type="count"
                order={6}
            />
            <FactStat
                title={t('Dengue fever')}
                value={t('twice')}
                type="text"
                order={6}
            />
            <FactStat
                title={t('Mosquito bites')}
                value={'∞'}
                type="text"
                order={6}
            />
        </div>
    </div>
}
