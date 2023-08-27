import { useRouter } from 'next/router'
import { Button } from './button'
import{Flag} from './flag'


type CountryItemProps = {
    countryName: string
    countryCode:string
} 

export function CountryItem({ countryName, countryCode }: CountryItemProps) {
    const router=useRouter()
    return <li className="list-none sm:w-6/12 w-11/12 shadow-md m-5 p-5 mb-10 sm:ml-10 ml-12 flex items-center flex-wrap gap-5">
        <div className="flex items-center gap-5">
           <Flag countryCode={countryCode} countryName={countryName} />
            <div>{`${countryName} (${countryCode})`}</div>
        </div>
            <Button onClick={()=> router.push(`/${countryCode}`)} className='ml-auto'>bankHolidays</Button>
    </li>
}