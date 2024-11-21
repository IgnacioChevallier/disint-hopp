import { cva, VariantProps } from "class-variance-authority";
import { iconMap } from "./IconMap";

const iconVariant = cva("", {
    variants: {
        size: {
            small: "w-6 h-6",
            medium: "w-8 h-8",
            large: "w-12 h-12",
            xlarge: "w-36 h-36",
        },
    },
    defaultVariants: {
        size: "medium",
    },
});

export interface IconProps extends VariantProps<typeof iconVariant> {
    name: keyof typeof iconMap | string;
    color?: string;
}

const colorMap: { [key: string]: string } = {
    primary: "#0095FF",
    danger: "#DC3545",
    gray: "#4C4C4C",
};

const sizeMap = {
    small: 24,
    medium: 32,
    large: 48,
    xlarge: 150,
};

const Icon = ({ name, size, color = "#1A1A1A" }: IconProps) => {
    const icon = iconMap.get(name.toString());
    if (!icon) return null;
    const numericSize = sizeMap[size!];
    const hexaColor = colorMap[color] || color;
    console.log(hexaColor);
    return <div className={iconVariant({ size })}>{icon(numericSize, hexaColor)}</div>;
};

export default Icon;