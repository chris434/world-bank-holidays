import {Fragment} from 'react'
import { CountryItem } from '@/components/countryItem'
import {flagURL } from '@/utils/URLS'
import countries from '@/data/countryCodes.json'
import { LetterIndex } from '@/components/leterIndex'



export default function Home() {
    console.log(countries.length)
  return (
    <main className='flex w-screen'>
      <LetterIndex />
      <div className='w-full flex flex-col items-center mt-5'>
        <div id="A" className="w-6/12 pl-8 font-bold text-xl">A</div>
         {countries.map(({ countryCode, countryName },i) => {
        const currentAsciiNum = countryName.charCodeAt(0)
        const previousAsciiNum = countries[!i ? 0 : i - 1].countryName.charCodeAt(0)
        const currentChar=countryName[0]
        return <Fragment key={countryCode}>
          {currentAsciiNum > previousAsciiNum && currentAsciiNum !== 65 && <div id={currentChar} className="w-6/12 pl-8 font-bold text-xl">{currentChar}</div>}
          <CountryItem countryName={countryName}  countryCode={countryCode} /></Fragment>
      })}
      </div>
    </main>
  )
}


