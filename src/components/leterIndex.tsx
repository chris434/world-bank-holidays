import { CHARACTERS } from "@/data/characters"

export function LetterIndex() {
    
    return <div className="flex flex-col p-5 gap-1 overflow-y-scroll w-[10%] fixed h-screen" >
        {CHARACTERS.map(char => {
            return <a className="hover:text-gray-400"  href={`#${char}`} key={char}>{char }</a>
        })}

    </div>
}