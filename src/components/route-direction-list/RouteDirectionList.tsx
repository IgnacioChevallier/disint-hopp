import React, { HTMLAttributes } from "react";
import {RouteDirection, RouteDirectionProps} from "../route-direction/RouteDirection";

export interface RouteDirectionListProps extends HTMLAttributes<HTMLDivElement> {
    routeDirections: RouteDirectionProps[]
}

export const RouteDirectionList = ({ routeDirections, ...props }: RouteDirectionListProps) => {
    return (
        <div className="flex flex-col gap-[10px] py-[10px]" {...props}>
            {routeDirections.map((routeDirectionProps   , index) => (
                <div key={index} className="flex flex-col items-start">
                    <RouteDirection
                        {...routeDirectionProps}
                        position={
                            index === 0 ? "first" :
                                index === routeDirections.length - 1 ? "last" :
                                    "middle"
                        }
                    />
                </div>
            ))}
        </div>
    );
};
