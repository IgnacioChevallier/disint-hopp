import React, { HTMLAttributes } from "react";
import {ListItem, ListItemProps} from "../list-item/ListItem";

export interface PastTripsProps extends HTMLAttributes<HTMLDivElement> {
    items: ListItemProps[]
}


export const FavoriteTrips = ({ items, ...props }: PastTripsProps) => {
    return (
        <div className="flex flex-col gap-[8px]" {...props}>
            {items.map((listItemProps, index) => (
                <div key={index} className="flex flex-col items-start">
                    <ListItem {...listItemProps} />
                </div>
            ))}
        </div>
    );
};
