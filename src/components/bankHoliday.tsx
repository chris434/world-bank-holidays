import { MONTHS } from "@/data/date"
import { BankHolidayProps } from "@/types/bankHolidaysType"
import moment from "moment"
type ComponentBankHolidayProps = {
    i?: number
    bankHolidays?: BankHolidayProps[]
    bankHoliday: BankHolidayProps
    className?: string
    title?: string
    
}

export function BankHoliday({ bankHoliday,bankHolidays,i,title,className='' }: ComponentBankHolidayProps) {
    const PILL_CLASS='bg-blue-400 rounded-2xl p-2 text-white'
    const { localName, launchYear, counties, global,date } = bankHoliday
                const currentDate = new Date(date)
                const previousDate =bankHolidays? new Date(bankHolidays[i?i-1:0].date):null
                const currentMonth = currentDate.getMonth()
                const previousMonth= previousDate? previousDate.getMonth():null
                const formattedDate = moment(currentDate).format('ddd D MMM YYYY')
    return <>
     {previousMonth !==null && currentMonth > previousMonth? MONTHS[currentMonth]:i===0?MONTHS[currentMonth]:null }
        <li className={`shadow-md mb-10 p-5 h-fit m-5 ${className}`}>
            {title&&<div className="mb-5 text-2xl">{title}</div>}
                 <div className='flex gap-2 items-center sm:flex-row flex-col'>
                    <div className='text-xl font-bold'>{localName}</div>
                    <div>{formattedDate}</div>    
                </div>
                    <div className='flex p-5 gap-5 justify-center sm:flex-row flex-col'>
                        <div className={PILL_CLASS}>Origin: {launchYear ? launchYear : 'Unknown'}</div>
                        <div className={PILL_CLASS}>countries: {counties ? counties.join(' ') : 'Unknown'} </div>
                        <div className={PILL_CLASS}>global: {global?'Yes':'No'} </div>
                </div>
        </li>
    </>

}