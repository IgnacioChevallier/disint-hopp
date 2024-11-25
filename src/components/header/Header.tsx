import React, { useState } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { iconMap } from "../icon/IconMap";
import { IconButton } from "../icon-button/IconButton";
import { Searchbar } from "../searchbar/Searchbar";

const familyGroupHeaderStyles = cva('flex items-center text-black justify-between p-2 w-full', {
    variants: {
        type: {},
    },
});

interface HeaderProps extends VariantProps<typeof familyGroupHeaderStyles> {
    trailingIconName: keyof typeof iconMap;
    title: string;
    leadingIconName: keyof typeof iconMap;
    showSearchbar?: boolean;
    options?: string[];
    placeholder?: string;
}

const Header = ({ type, title, trailingIconName, leadingIconName, showSearchbar = false, placeholder, options }: HeaderProps) => {
    const [isSearchbarVisible, setSearchbarVisible] = useState(showSearchbar);

    return (
        <div>
            <div>
                <div className={familyGroupHeaderStyles({ type }) + " bg-gray-100"}>
                    <IconButton iconName={leadingIconName} size="medium" />
                    <h2 className="text-h2-bold line-clamp-1">{title}</h2>
                    <IconButton iconName={trailingIconName} size='medium' />
                </div>
            </div>
            <div className="pl-12 pr-12 pb-4 bg-gray-100">
                {isSearchbarVisible && placeholder && options && <Searchbar placeholder={placeholder} options={options} trailingIcon={"search"} />}
            </div>
            <div className="w-full h-0.5 bg-gray-300"></div>
        </div>
    );
};

export default Header;