import {TransportationMethodComponent, TransportationMethodProps} from "../transportation-method/TransportationMethod";
import React, {HTMLAttributes, useState} from "react";
import Icon from "../icon/Icon";
import "../../styles/customScrollbar.css";
import {IconButton} from "../icon-button/IconButton";

export interface TripSummaryProps extends HTMLAttributes<HTMLDivElement> {
    children: TransportationMethodComponent | TransportationMethodComponent[];
    time: string;
    duration: string;
}

export type TripSummaryComponent = React.ReactElement<TransportationMethodProps>;

export const TripSummary = ({children, time, duration, onClick, ...props}: TripSummaryProps): TripSummaryComponent => {
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const childrenArray = React.Children.toArray(children);

    return(
        <div className={"w-full max-w-full h-auto p-[16px] flex flex-col space-y-2 bg-white rounded-[8px]"} {...props}>
            <div className={"flex justify-end gap-[6px]"}>
                <p className={"text-p-regular"}>{duration}</p>
                <p className={"text-p-regular"}>|</p>
                <p className={"text-p-bold"}>{time}</p>
            </div>
            <div className={"flex flex-row items-center justify-between gap-2"}>
                <div className={"flex flex-row items-center gap-4 overflow-x-auto custom-scrollbar"} onClick={onClick}
                     style={{scrollbarWidth: 'none'}}>
                    <style>
                        {`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}
                    </style>
                    {childrenArray.map((child, index) => (
                        <React.Fragment key={index}>
                            <div className={"flex-shrink-0"}>
                                {child}
                            </div>
                            <div className={"pb-[20px]"}>
                                {index < childrenArray.length - 1 && (
                                    <Icon name={"arrow right"} size={"small"}/>
                                )}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <IconButton
                    iconName={isFavourite ? "favourite filled" : "favourite"}
                    size={"small"}
                    iconColor={isFavourite ? "#ffb800" : "#000"}
                    onClick={() => setIsFavourite(!isFavourite)}
                    className="no-hover"
                />
            </div>
        </div>
    )
}