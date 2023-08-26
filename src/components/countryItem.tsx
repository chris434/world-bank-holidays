import{Flag} from './flag'


type CountryItemProps = {
    countryName: string
    countryCode:string
} 

export function CountryItem({ countryName,countryCode}:CountryItemProps) {
    return <li className="list-none sm:w-6/12 w-11/12">
        <a href={`/${countryCode}`} className='shadow-md m-5 p-5 list-none mb-10 sm:ml-10 ml-12 flex items-center gap-5 cursor-pointer'>
            <Flag countryCode={countryCode} countryName={countryName} />
        <div>{`${countryName} (${countryCode})` }</div>
        </a>
    </li>
}