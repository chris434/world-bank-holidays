import { BankHolidayProps } from "@/types/bankHolidaysType"
import { getBankHolidays } from "./getBankHolidays"

export async function getNextBankHoliday(bankHolidays: BankHolidayProps[],year:string,countryCode:string) {
    let nextBankHoliday: BankHolidayProps | null = null
    const currentMonth =new Date().getMonth()
    const currentYear = new Date().getFullYear()

    if (currentYear !== parseInt(year)) {

        const { bankHolidays: currentBankHolidays} = await getBankHolidays(countryCode, currentYear.toString())

      bankHolidays=currentBankHolidays?currentBankHolidays:bankHolidays
    }

    if (currentMonth === 12) {
        const nextYear=currentYear+1
        const { bankHolidays: currentBankHolidays } = await getBankHolidays(countryCode, nextYear.toString())
        return currentBankHolidays? currentBankHolidays[0]:null
    }

    for (let i = 0; i < bankHolidays.length; i++) {
        const nextDate = new Date(bankHolidays[i].date).getTime()
        const currentDate = new Date().getTime()

        if (nextDate > currentDate&& !nextBankHoliday) {
            nextBankHoliday = bankHolidays[i]
        }
        
    }
    return nextBankHoliday
}