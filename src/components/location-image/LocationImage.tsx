import { cva } from 'class-variance-authority'
import React from "react";

export const locationImage = cva(
    "object-cover rounded-lg",
    {
        variants: {
            size: {
                small: "h-[100px] w-auto",
                medium: "w-[300px] h-auto"
            }
        },
        defaultVariants: {
            size: "small"
        }
    }
)

export interface LocationImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    size: "small" | "medium";
}

export const LocationImage = ({src, alt, size, ...props} : LocationImageProps) => {
    return (
        <img className={locationImage({size})} src={src} alt={alt} {...props}/>
    );
}