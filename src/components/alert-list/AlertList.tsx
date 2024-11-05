import React, { HTMLAttributes } from "react";
import { Alert, AlertProps } from "../alert/Alert";

export interface AlertListProps extends HTMLAttributes<HTMLDivElement> {
    alerts: AlertProps[];
}

export const AlertList = ({ alerts, ...props }: AlertListProps) => {
    return (
        <div className="flex flex-col gap-2" {...props}>
            {alerts.map((alertProps, index) => (
                <div key={index}>
                    <Alert {...alertProps} />
                </div>
            ))}
        </div>
    );
};
