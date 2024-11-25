import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import {iconMap} from "../icon/IconMap";
import {IconButton} from "../icon-button/IconButton";

const familyGroupHeaderStyles = cva('flex items-center text-black justify-between p-2 w-full', {
    variants: {
        type: {},
    },
});
interface FamilyGroupHeaderProps extends VariantProps<typeof familyGroupHeaderStyles> {
    iconName: keyof typeof iconMap;
    title: string;
}

const FamilyGroupHeader = ({ type, title, iconName }: FamilyGroupHeaderProps) => {
    return (
        <div className={familyGroupHeaderStyles({ type })}>
            <IconButton iconName="arrow back" size="medium" />
            <h2 className="text-h2-bold line-clamp-1">{title}</h2>
            <IconButton iconName={iconName} color='primary' size='medium' iconSize={"small"} iconColor={'#FFF'}/>
        </div>
    );
};

export default FamilyGroupHeader;
