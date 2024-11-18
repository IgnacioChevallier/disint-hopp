import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import ProfilePicture from '../profile-picture/ProfilePicture';
import { IconButton } from "../icon-button/IconButton";

const familyMemberInfoStyles = cva('flex items-center gap-3 p-[8px] rounded-[8px] bg-white w-full justify-between', {
    variants: {
        type: {},
    },
});

interface FamilyMemberInfoProps extends VariantProps<typeof familyMemberInfoStyles> {
    link: string;
    userName: string;
    role: string;
}

const FamilyMemberInfo = ({ type, link, userName, role }: FamilyMemberInfoProps) => {
    return (
        <div className={familyMemberInfoStyles({ type })}>
            <div className="flex overflow-hidden justify-center items-center gap-[16px]">
                <ProfilePicture link={link} size="small"/>
                <h3 className="text-h3-regular text-gray-600 truncate">{userName}</h3>
                <span className="text-p-regular text-primary truncate">{role}</span>
            </div>
            <IconButton iconName="three dots" size="medium" color="gray"/>
        </div>
    );
};

export default FamilyMemberInfo;
