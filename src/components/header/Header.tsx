import React, { useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { IconButton } from "../icon-button/IconButton";
import { Searchbar } from "../searchbar/Searchbar";

const familyGroupHeaderStyles = cva('flex items-center text-black justify-between p-2 pt-[32px] w-full min-w-[390px]', {
    variants: {
        type: {},
    },
});

interface HeaderProps extends VariantProps<typeof familyGroupHeaderStyles> {
    trailingIconName?: string;
    title: string;
    leadingIconName?: string;
    trailingOnClick?: () => void;
    leadingOnClick?: () => void;
    showSearchbar?: boolean;
    options?: string[];
    placeholder?: string;
}

const Header = ({ type, title, trailingIconName, leadingIconName, showSearchbar = false, placeholder, options , leadingOnClick, trailingOnClick}: HeaderProps) => {
    const [isSearchbarVisible, setSearchbarVisible] = useState(showSearchbar);

    return (
        <div className={"w-full bg-white shadow-custom absolute z-20"}>
            <div>
                <div className={familyGroupHeaderStyles({ type })}>
                    {leadingIconName ?
                        <IconButton iconName={leadingIconName} size="medium" onClick={leadingOnClick} /> :
                        <div className={"w-8 h-8"}> </div>
                    }
                    <h2 className="text-h2-bold line-clamp-1">{title}</h2>
                    {trailingIconName ?
                        <IconButton iconName={trailingIconName} size="medium" onClick={trailingOnClick} /> :
                        <div className={"w-8 h-8"}> </div>
                    }
                </div>
            </div>
            {isSearchbarVisible && placeholder && options &&
            <div className="pl-12 pr-12 pb-4">
                <Searchbar placeholder={placeholder} options={options} trailingIcon={"search"} bordered/>
            </div>
            }
        </div>
    );
};

export default Header;