import { GetServerSideProps } from 'next'
import countries from '@/data/countryCodes.json'
import { getNextBankHoliday } from '@/utils/getNextBankHoliday'
import { getBankHolidays } from '@/utils/getBankHolidays'

export const serverSideProps: GetServerSideProps = async (cxt) => {
    const params = cxt.params
    const countryCode = params?.countryCode as string
    const year=params?.year as string||new Date().getFullYear().toString()
    
    const { bankHolidays, notFound } = await getBankHolidays(countryCode, year)
    
if ( notFound || !bankHolidays ) {
        return {
            notFound: true
        }
}
    const country = countries.find(country => country.countryCode === countryCode) || null
    
const nextBankHoliday = await getNextBankHoliday(bankHolidays,year,countryCode)
    
    return {
        props: {
            year,
            country,
            countryCode,
            bankHolidays,
            nextBankHoliday
        }
    }
}