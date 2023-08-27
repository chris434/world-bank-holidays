import { useRouter } from 'next/router'
import Image from 'next/image'
import {useRef,Fragment, useState } from 'react'
import { bankHolidaysProps } from '@/types/bankHolidaysType'
import { Flag } from '@/components/flag'
import { Button } from '@/components/button'
import { BankHoliday } from '@/components/bankHoliday'
import { Header } from '@/components/header'
import chevronDown from '@/icons/chevron-down-solid.svg'
import chevronUp from '@/icons/chevron-up-solid.svg'

export function BankHolidaysView({ bankHolidays,year,countryCode,country,nextBankHoliday }: bankHolidaysProps) {
    const router = useRouter()
    const currentYear=new Date().getFullYear()
    const yearInput = useRef<HTMLInputElement>(null)
    const [menuToggle,toggleMenu]=useState(true)
    
    return <main>
        <Header>
            <div className="bg-white">
                <button className='cursor-pointer m-3 mt-0 ml-auto block' onClick={()=>toggleMenu(menuToggle=> !menuToggle)}>
                     <Image className=' sm:hidden block' src={menuToggle?chevronUp: chevronDown} alt={menuToggle?'open':'closed'} width="30" height="30" />
                </button>
              
                {menuToggle&&
                <section className='flex sm:flex-row flex-col justify-between items-center p-5 sm:pt-5 pt-0 '>
    
            <div className='flex items-center gap-5 sm:mb-0 mb-3'>
            <Flag countryName={country.countryName } countryCode={country.countryCode} />
            <h2 className='text-2xl'>{country.countryName}</h2>
                </div>
                <div className="flex p-3 bg-blue-400 justify-around rounded-md gap-5">
             <form className="w-[5rem]">
                  <input ref={yearInput} min="1973" max="2073"  className='bg-transparent border-white border-2 text-white p-2 w-full ' type='number' defaultValue={year || currentYear} />        
            </form>
          
                    <Button onClick={() => yearInput.current?.value && router.push(`/${countryCode}/${yearInput.current.value}`)}>look up year</Button>
                </div>
            
                    
                </section>
                   }
          </div>
        </Header>
        <hr className='border-1 border-gray-500 ' />
        <ul className='flex justify-center list-none gap-5 sm:flex-row  flex-col-reverse w-full mt-5'>
        
            <ul className=' sm:w-6/12 w-full'>
            
            {bankHolidays.map((bankHoliday, i) => {
                console.log(bankHoliday)
         return <Fragment key={i}>
                    <BankHoliday i={i} bankHolidays={bankHolidays} bankHoliday={bankHoliday} />
                </Fragment>
        })}
            </ul>
                  <BankHoliday bankHoliday={nextBankHoliday} title='Next bank holiday' className='mt-5' />
        </ul>
       
    </main> 
}