import React, {HTMLAttributes} from "react";
import {ListItem, ListItemProps} from "../list-item/ListItem";


export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    items: ListItemProps[];
    endLine?: boolean;
    onItemClick?: (item: ListItemProps) => void;
}

export const List = ({items, endLine, onItemClick, ...props}: ListProps) => {
    return (
        <div className="flex flex-col gap-2" {...props}>
            <div className="w-full h-px bg-gray-300"/>
            {items.map((itemProps, index) => (
                <div key={index} className={"flex flex-col gap-2"}>
                    <ListItem
                        {...itemProps}
                        onClick={() => onItemClick && onItemClick(itemProps)}
                        className="cursor-pointer hover:bg-gray-100"
                    />
                    {!endLine && index === items.length - 1 ? null : <div className="w-full h-px bg-gray-300"/>}
                </div>
            ))}
        </div>
    );
}