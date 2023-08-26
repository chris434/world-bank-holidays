import { ChildrenProps } from "@/types/componentTypes"

type ButtonProps={
    onClick?:()=>void
}&ChildrenProps

export function Button({ children ,onClick}:ButtonProps) {
    return <button onClick={onClick} className="text-white">{children }</button>
}