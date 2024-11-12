import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const profilePictureStyles = cva(
    'rounded-full flex items-center justify-center overflow-hidden flex-shrink-0',
    {
        variants: {
            size: {
                large: 'w-32 h-32',
                medium: 'w-20 h-20',
                small: 'w-12 h-12',
            },
        },
        defaultVariants: {
            size: 'medium',
        },
    }
);

interface ProfilePictureProps extends VariantProps<typeof profilePictureStyles> {
    link: string;
    altLink?: string;

}

const ProfilePicture = ({ size, link, altLink = "https://cdn-icons-png.flaticon.com/128/149/149071.png" }: ProfilePictureProps) => {
    return (
        <div className={profilePictureStyles({ size })}>
            <img src={link} alt="profile pic" onError={(e) => (e.currentTarget.src = altLink)} className="object-cover w-full h-full" />
        </div>
    );
};

export default ProfilePicture;
