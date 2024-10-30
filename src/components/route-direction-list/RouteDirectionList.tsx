import React, {FC, HTMLAttributes, ReactNode} from "react";
import {RouteDirection, RouteDirectionProps} from "../route-direction/RouteDirection";

export interface RouteDirectionListProps extends HTMLAttributes<HTMLDivElement> {
    routeDirections: RouteDirectionProps[]
}

export const RouteDirectionList = ({ routeDirections, ...props }: RouteDirectionListProps) => {
    return (
        <div className="flex flex-col" {...props}>
            <div className="w-full h-px bg-gray-300" />
            {routeDirections.map((routeDirectionProps, index) => (
                <div key={index} className="flex flex-col items-start">
                    <RouteDirection {...routeDirectionProps} />
                    <div className="w-full h-px bg-gray-300"/>
                </div>
            ))}
        </div>
    );
};
