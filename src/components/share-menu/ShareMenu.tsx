import {SlideModalBox} from "../slide-modal-box/SlideModalBox";
import Icon, {IconProps} from "../icon/Icon";
import React from "react";

export interface ShareMenu {
    link: string,
    iconList: IconProps[]
}

export const ShareMenu = ({link, iconList}: ShareMenu) => {
    return (
        <SlideModalBox>
            <div className="flex justify-center">
                <p className={"text-h2-regular"}>Share Invitation</p>
            </div>
            <div className="p-7">
                <li className="flex items-center justify-between w-full min-h-[35px] bg-gray-50 rounded p-1">
                    <span className="flex-1">
                {link}
            </span>
                        <div
                            className="flex justify-center items-center w-12 h-7 min-w-12 min-h-6 rounded-full flex-shrink-0">
                            <Icon name="copy" size="medium"/>
                        </div>
                </li>
            </div>
            <div className="flex flex-row items-center justify-between gap-[8px]  w-full overflow-x-auto custom-scrollbar">
                {iconList.map((icon, index) => (
                    <div key={index} className="flex flex-col p-1 items-center  cursor-pointer hover:bg-gray-100 ">
                        <Icon name={icon.name} size={icon.size}/>
                    </div>
                ))}
            </div>
        </SlideModalBox>
    )
}