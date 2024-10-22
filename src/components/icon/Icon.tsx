import React from 'react';
import {iconMap} from "./IconMap";

export interface IconProps {
    name: keyof typeof iconMap | string;
    size: number;
}

const Icon = ({ name, size }: IconProps) => {
    const icon = iconMap.get(name.toString());
    if (!icon) return null;
    return icon(size);
};

export default Icon;