import {TransportationMethodComponent, TransportationMethodProps} from "../transportation-method/TransportationMethod";
import React, {HTMLAttributes, useState} from "react";
import Icon from "../icon/Icon";
import "../../styles/customScrollbar.css";
import {IconButton} from "../icon-button/IconButton";

export interface TripSummaryProps extends HTMLAttributes<HTMLDivElement> {
    children: TransportationMethodComponent | TransportationMethodComponent[];
    time: string;
}

export type TripSummaryComponent = React.ReactElement<TransportationMethodProps>;

export const TripSummary = ({children, time, onClick, ...props}: TripSummaryProps): TripSummaryComponent => {
    const [isFavourite, setIsFavourite] = useState<boolean>(false);
    const childrenArray = React.Children.toArray(children);

    return(
        <div className={"min-w-[393px] h-[100px] p-[8px] flex flex-col content-end"} {...props}>
            <div className={"flex justify-end"}>
                <p className={"text-p-bold"}>{time}</p>
            </div>
            <div className={"flex flex-row items-center justify-between gap-[20px]"}>
                <div className={"flex flex-row flex-grow items-center gap-[10px] min-w-[347px] overflow-x-auto custom-scrollbar"} onClick={onClick}>
                    {childrenArray.map((child, index) => (
                        <React.Fragment key={index}>
                            <div className={"flex-shrink-0"}>
                                {child}
                            </div>
                            {index < childrenArray.length - 1 && (
                                <Icon name={"arrow right"} size={"small"}/>
                            )}
                        </React.Fragment>
                    ))}
                </div>
                <IconButton iconName={isFavourite ? "favourite filled" : "favourite"} size={"small"} iconColor={isFavourite ? "#ffb800" : "#000"} onClick={() => setIsFavourite(!isFavourite)}/>
            </div>
        </div>
    )
}