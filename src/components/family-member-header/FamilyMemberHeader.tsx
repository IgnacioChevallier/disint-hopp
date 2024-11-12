import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import ProfilePicture from '../profile-picture/ProfilePicture';
import {IconButton} from "../icon-button/IconButton";

const familyMemberHeaderStyles = cva('flex items-center gap-2 p-2 w-full justify-between', {
    variants: {
        type: {},
    },
});

interface familyMemberHeaderProps extends VariantProps<typeof familyMemberHeaderStyles> {
    link: string;
    userName: string;
}

const FamilyMemberHeader = ({ type, link, userName }: familyMemberHeaderProps) => {
    return (
        <div className={familyMemberHeaderStyles({ type })}>
            <IconButton iconName="arrow back" size="medium"/>
            <div className="flex items-center gap-2">
                <ProfilePicture link={link} size="small"/>
                <h2 className="text-h2-bold line-clamp-1">{userName}</h2>
            </div>
            <IconButton iconName="location" color="primary" size="medium" iconColor={'#FFF'}/>
        </div>
);
};

export default FamilyMemberHeader;
