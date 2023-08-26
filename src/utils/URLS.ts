export function flagURL(countryCode: string) {
    return `https://flagsapi.com/${countryCode}/flat/64.png`
}
export function countryURL(countryCode: string,year: string) {
    return `https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`
}