import React, {HTMLAttributes} from "react";
import {ListItem, ListItemProps} from "../list-item/ListItem";


export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    items: ListItemProps[];
}

export const List = ({items, ...props}: ListProps) => {
    return (
        <div className="flex flex-col" {...props}>
            <div className="w-full h-px bg-gray-300"/>
            {items.map((itemProps, index) => (
                <div key={index}>
                    <ListItem {...itemProps} />
                    <div className="w-full h-px bg-gray-300"/>
                </div>
            ))}
        </div>
    );
}