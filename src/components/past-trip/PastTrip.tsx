import {cva, VariantProps} from "class-variance-authority";
import React, {ReactNode} from "react";
import Icon, {IconProps} from "../icon/Icon";
import {ListItem} from "../list-item/ListItem";

const pastTripVariant = cva("flex items-center gap-2 p-2 bg-white rounded-lg")
export interface PastTripProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "text"> {
    mainIcon?: IconProps["name"];
    start?: ReactNode;
    end?: ReactNode;
    price?: ReactNode;
    time?: ReactNode;
}

export type PastTripComponent = React.ReactElement<PastTripProps>

export const PastTrip = ({
                             mainIcon,
                             start,
                             end,
                             price,
                             time,
                             style,
                             ...props
                         }: PastTripProps) => {

    return (
        <li className={pastTripVariant()} {...props}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: '100%',
                minHeight: 35,
                ...style,
            }}>
            <div className="flex items-center gap-4">
                {mainIcon &&
                    <div
                        className="flex justify-center items-center w-12 h-7 min-w-12 min-h-6 rounded-full flex-shrink-0">
                        <Icon name={mainIcon} size={"large"}/>
                    </div>
                }
                <div className="flex flex-col">
                    <div className="flex">
                        <ListItem
                            text={start}
                            additionalText={price}
                            leadingIcon="radio button checked"
                            leadingIconSize="small"
                            additionalTextColor="text-primary"
                            className={"cursor-default"}
                        />
                    </div>
                    <div className="flex">
                        <ListItem
                            text={end}
                            additionalText={time}
                            leadingIcon="location"
                            leadingIconSize="small"
                            className={"cursor-default"}
                        />
                    </div>
                </div>
            </div>
        </li>
    );
};