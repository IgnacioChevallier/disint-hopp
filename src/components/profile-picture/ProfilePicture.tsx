import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { iconMap } from '../icon/IconMap';
import Icon from '../icon/Icon';

const profilePictureStyles = cva(
    'rounded-full flex items-center justify-center overflow-hidden',
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
    iconName: keyof typeof iconMap;
}

const ProfilePicture = ({ size, iconName }: ProfilePictureProps) => {
    return (
        <div className={profilePictureStyles({ size })}>
            <Icon name={iconName} size={size} />
        </div>
    );
};

export default ProfilePicture;
