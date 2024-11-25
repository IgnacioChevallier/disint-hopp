import {TripSummaryComponent} from "../trip-summary/TripSummary";
import React from "react";

export interface TripSummaryListProps extends React.HTMLProps<HTMLDivElement>{
    children: TripSummaryComponent | TripSummaryComponent[]
}

export const TripSummaryList = ({ children, ...props }: TripSummaryListProps) => {
    return (
        <div className={"flex flex-col gap-[8px] py-[8px]"} {...props}>
            {children}
        </div>
    )
}