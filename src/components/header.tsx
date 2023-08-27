import Link from "next/link"
import { ReactNode } from "react"


type ChildrenProps = {
    children?:ReactNode
}

export function Header({children}:ChildrenProps) {
    return <div className="sticky top-0">
        <header className="bg-blue-400 p-5 sticky">
            <Link href="/" className="w-[204px] block">
                <h1 className="text-2xl text-white w-fit">world bankHolidays</h1>
            </Link>
        </header>
        {children}
    </div>
}