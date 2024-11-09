import {ButtonHTMLAttributes} from "react";
import Icon from "../icon/Icon";

export const GoogleLoginButton = ({...props}:ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={"min-w-[300px] min-h-[46px] bg-gray-100 rounded-[21px] pl-[20px] gap-[10px] text-h3-regular text-gray-600 flex flex-row items-center"} {...props}>
            <Icon name={'google'} size={"medium"}/>
            Continue with Google
        </button>
    )
}