import React, { HTMLAttributes } from "react";
import { AlertComponent } from "../alert/Alert";

export interface AlertListProps extends HTMLAttributes<HTMLDivElement> {
    children: AlertComponent | AlertComponent[];
}

export const AlertList = ({ children, ...props }: AlertListProps) => {
    return (
        <div className="flex flex-col gap-2" {...props}>
            {children}
        </div>
    );
};
