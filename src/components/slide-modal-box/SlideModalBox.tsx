import {ReactNode} from "react";

export interface SlideModalBoxProps {
    children: ReactNode
}

export const SlideModalBox = ({children}: SlideModalBoxProps) => {
    return(
        <div className={"w-full rounded-t-[16px] bg-background-main p-[16px] shadow-[rgba(0,0,15,0.5)_0px_-2px_3px_-1px]"}>
            <div className={" max-w-[64px] min-h-[4px] rounded-full bg-gray-500 relative top-0 inset-0 m-auto"}/>
            <div className={"mt-[10px]"}>
                {children}
            </div>
        </div>
    )
}