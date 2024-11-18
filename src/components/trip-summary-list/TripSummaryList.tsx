import {TripSummaryComponent} from "../trip-summary/TripSummary";
import React from "react";

export interface TripSummaryListProps {
    children: TripSummaryComponent | TripSummaryComponent[]
}

export const TripSummaryList = ({ children }: TripSummaryListProps) => {
    return (
        <div className={"flex flex-col gap-[8px] py-[8px]"}>
            {children}
        </div>
    )
}