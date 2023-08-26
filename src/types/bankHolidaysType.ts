export type bankHolidaysProps = {
    year: string
    countryCode: string
    nextBankHoliday: BankHolidayProps
    country:{countryName: string , countryCode: string}
    bankHolidays: BankHolidayProps[]
}
export type  BankHolidayProps = {
        date:string
        localName: string
        launchYear: number|null
        global:boolean
        counties:string[]|null
    
}