import { useRouter } from 'next/router'
import {useRef,Fragment } from 'react'
import { bankHolidaysProps } from '@/types/bankHolidaysType'
import { Flag } from '@/components/flag'
import { Button } from '@/components/button'
import { BankHoliday } from '@/components/bankHoliday'
import { Header } from '@/components/header'

export function BankHolidaysView({ bankHolidays,year,countryCode,country,nextBankHoliday }: bankHolidaysProps) {
    const router = useRouter()
    const currentYear=new Date().getFullYear()
    const yearInput=useRef<HTMLInputElement>(null)
    return <main>
        <Header>
        <section className='flex sm:flex-row flex-col justify-between items-center p-5 bg-white '>
            <div className='flex items-center gap-5 sm:mb-0 mb-3'>
            <Flag countryName={country.countryName } countryCode={country.countryCode} />
            <h2 className='text-2xl'>{country.countryName}</h2>
            </div>
            <div className="flex p-3 bg-blue-400 justify-around rounded-md ">
            <input ref={yearInput} className='bg-transparent border-white border-2 text-white w-6/12 p-2' type='number' defaultValue={year||currentYear} />
            <Button  onClick={()=>yearInput.current?.value&& router.push(`/${countryCode}/${yearInput.current.value}`)}>look up year</Button>
            </div>
        </section>
        </Header>
       
        <hr className='border-1 border-gray-500 ' />
        <ul className='flex justify-center list-none gap-5 sm:flex-row  flex-col-reverse w-full mt-5'>
        
            <ul className=' sm:w-6/12 w-full'>
            
            {bankHolidays.map((bankHoliday, i) => {

         return <Fragment key={i}>
                    <BankHoliday i={i} bankHolidays={bankHolidays} bankHoliday={bankHoliday} />
                </Fragment>
        })}
            </ul>
                  <BankHoliday bankHoliday={nextBankHoliday} title='Next bank holiday' className='mt-5' />
        </ul>
       
    </main> 
}