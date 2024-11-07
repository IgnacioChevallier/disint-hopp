import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import ProfilePicture from '../profile-picture/ProfilePicture';
import Icon from '../icon/Icon';
import {iconMap} from "../icon/IconMap";

const familyGroupHeaderStyles = cva('flex items-center gap-2', {
    variants: {
        type: {
            default: 'text-black',
        },
    },
});

interface FamilyGroupHeaderProps extends VariantProps<typeof familyGroupHeaderStyles> {
    iconName: keyof typeof iconMap;
    title: string;
}

const FamilyGroupHeader = ({ type, title, iconName }: FamilyGroupHeaderProps) => {
    return (
        <div className={familyGroupHeaderStyles({ type })}>
            <ProfilePicture iconName={iconName} size="medium" />
            <h2 className="text-h2-bold">{title}</h2>
            <Icon name="location" size={'medium'} color="#0095FF" />
        </div>
    );
};

export default FamilyGroupHeader;
