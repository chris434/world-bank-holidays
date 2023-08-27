import { ChildrenProps } from "@/types/componentTypes"

type ButtonProps={
    onClick?: () => void
    className?: string
}&ChildrenProps

export function Button({ children,className ,onClick}:ButtonProps) {
    return <button onClick={onClick} className={`text-white bg-blue-400 p-3  ${className}`}>{children }</button>
}