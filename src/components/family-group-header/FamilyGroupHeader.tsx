import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import ProfilePicture from '../profile-picture/ProfilePicture';
import Icon from '../icon/Icon';
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
    iconName2: keyof typeof iconMap;
}

const FamilyGroupHeader = ({ type, title, iconName, iconName2 }: FamilyGroupHeaderProps) => {
    return (
        <div className={familyGroupHeaderStyles({ type })}>
            <ProfilePicture iconName={iconName} size="medium" />
            <h2 className="text-h2-bold">{title}</h2>
            <IconButton iconName={iconName2} color='primary' size='medium' />
        </div>
    );
};

export default FamilyGroupHeader;
