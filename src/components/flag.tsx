import { flagURL } from '@/utils/URLS'
import Image from 'next/image'

type FlagProps = {
    countryCode: string
    countryName:string
}

export function Flag({ countryCode, countryName }:FlagProps) {
    return<Image  src={flagURL(countryCode)} alt={countryName} width={64} height={64} />
}