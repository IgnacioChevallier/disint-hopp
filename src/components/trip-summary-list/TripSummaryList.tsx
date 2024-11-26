import {TripSummaryComponent} from "../trip-summary/TripSummary";
import React from "react";

export interface TripSummaryListProps extends React.HTMLProps<HTMLDivElement>{
    children: TripSummaryComponent | TripSummaryComponent[]
}

export const TripSummaryList = ({ children, ...props }: TripSummaryListProps) => {
    return (
        <div className={"flex flex-col py-[8px]"} {...props}>
            {React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement, {
                    style: { marginBottom: "8px" },
                })
            )}
        </div>
    )
}