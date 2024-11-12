import {TripSummaryComponent} from "../trip-summary/TripSummary";
import React from "react";

export interface TripSummaryListProps {
    children: TripSummaryComponent | TripSummaryComponent[]
}

export const TripSummaryList = ({ children }: TripSummaryListProps) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <div>
            {childrenArray.map((child, index) => (
                <React.Fragment key={index}>
                    {index === 0 && (<hr className="border-t-[1px] border-gray-300"/>)}
                    {child}
                    <hr className="border-t-[1px] border-gray-300" />
                </React.Fragment>
            ))}
        </div>
    )
}