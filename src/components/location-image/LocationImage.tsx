import { cva } from 'class-variance-authority'

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

export interface LocationImageProps {
    src: string;
    alt: string;
    size: "small" | "medium";
}

export const LocationImage = ({src, alt, size} : LocationImageProps) => {
    return (
        <img className={locationImage({size})} src={src} alt={alt} />
    );
}