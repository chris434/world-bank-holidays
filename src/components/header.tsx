import { ReactNode } from "react"


type ChildrenProps = {
    children?:ReactNode
}

export function Header({children}:ChildrenProps) {
    return <div className="sticky top-0">
        <header className="bg-blue-400 p-5 sticky"><h1 className="text-2xl text-white">world bankHolidays</h1></header>
        {children}
    </div>
}