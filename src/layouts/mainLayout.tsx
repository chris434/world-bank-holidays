import { ChildrenProps } from "@/types/componentTypes";
import { cloneElement, ReactElement } from "react";
import { Header } from "@/components/header"
import { useRouter } from "next/router";

export function MainLayout({ children }: ChildrenProps) {
    const router= useRouter()
    return <>
    {router.pathname==='/'&& <Header/>}
      {children}
    </> 
}