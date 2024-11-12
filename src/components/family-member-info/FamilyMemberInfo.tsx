import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import ProfilePicture from '../profile-picture/ProfilePicture';
import { IconButton } from "../icon-button/IconButton";

const familyMemberInfoStyles = cva('flex items-center gap-3 p-3 rounded-lg bg-gray-100 w-full justify-between', {
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
            <div className="flex items-center gap-3 overflow-hidden">
                <ProfilePicture link={link} size="small" />
                <div className="flex flex-col overflow-hidden">
                    <h2 className="text-h3-bold truncate">{userName}</h2>
                    <span className="text-p-regular text-primary truncate">{role}</span>
                </div>
            </div>
            <IconButton iconName="more_horiz" size="medium" color="gray" />
        </div>
    );
};

export default FamilyMemberInfo;
