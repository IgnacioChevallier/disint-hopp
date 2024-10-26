import { cva, VariantProps } from "class-variance-authority";
import { iconMap } from "./IconMap";

const iconVariant = cva("", {
    variants: {
        size: {
            small: "w-4 h-4",
            medium: "w-6 h-6",
            large: "w-8 h-8",
        },
    },
    defaultVariants: {
        size: "medium",
    },
});

export interface IconProps extends VariantProps<typeof iconVariant> {
    name: keyof typeof iconMap | string;
}

const sizeMap = {
    small: 16,
    medium: 24,
    large: 32,
};

const Icon = ({ name, size }: IconProps) => {
    const icon = iconMap.get(name.toString());
    if (!icon) return null;
    const numericSize = sizeMap[size!];
    return <div className={iconVariant({ size })}>{icon(numericSize)}</div>;
};

export default Icon;