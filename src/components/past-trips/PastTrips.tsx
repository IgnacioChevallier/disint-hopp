import React, {HTMLAttributes} from "react";
import {PastTrip, PastTripProps} from "../past-trip/PastTrip";

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    items: PastTripProps[];
    onItemClick?: (item: PastTripProps) => void;
}

export const PastTrips = ({items, onItemClick, ...props}: ListProps) => {
    return (
        <div className="flex flex-col gap-2" {...props}>
            {items.map((pastTripProps, index) => (
                <div key={index} className="flex flex-col gap-2 w-full">
                    <PastTrip
                        {...pastTripProps}
                        onClick={() => onItemClick && onItemClick(pastTripProps)}
                        style={{ width: '100%' }}
                    />
                </div>
            ))}
        </div>
    );
}