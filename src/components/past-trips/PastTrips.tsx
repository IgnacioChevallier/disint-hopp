import React, { HTMLAttributes } from "react";
import {RouteDirection, RouteDirectionProps} from "../route-direction/RouteDirection";
import {ListItem, ListItemProps} from "../list-item/ListItem";

export interface PastTripsProps extends HTMLAttributes<HTMLDivElement> {
    items: ListItemProps[]
}


export const PastTrips = ({ items, ...props }: PastTripsProps) => {
    return (
        <div className="flex flex-col" {...props}>
            <div className="w-full h-px bg-gray-300" />
            {items.map((listItemProps, index) => (
                <div key={index} className="flex flex-col items-start">
                    <ListItem {...listItemProps} />
                    <div className="w-full h-px bg-gray-300"/>
                </div>
            ))}
        </div>
    );
};
