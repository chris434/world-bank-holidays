import {GetServerSideProps}from 'next'
import { serverSideProps } from '@/server/serverSideProps'
import { bankHolidaysProps } from '@/types/bankHolidaysType'
import { BankHolidaysView } from '@/views/bankHolidays'


export default function BankHolidays(bankHolidays:bankHolidaysProps ) {
    return <BankHolidaysView {...bankHolidays}/>
}

export const getServerSideProps:GetServerSideProps=(cxt) => {
   return serverSideProps(cxt)
} 