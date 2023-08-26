import { countryURL } from './URLS'
import {BankHolidayProps} from '@/types/bankHolidaysType'
type Response = {status:number}& BankHolidayProps[]

export async function getBankHolidays(countryCode:string,year:string) {
    const res = await fetch(countryURL(countryCode, year))
    const bankHolidays = await res.json() as Response
console.log(bankHolidays)
 if (bankHolidays.status === 404 || !bankHolidays) {
        return {
            notFound: true
        }
 }
    return { bankHolidays }
}