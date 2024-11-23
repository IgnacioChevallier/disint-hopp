import React, {HTMLAttributes} from "react";
import { ListItemComponent, ListItemProps} from "../list-item/ListItem";

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    children: ListItemComponent | ListItemComponent[];
    endLine?: boolean;
    dividingLines?: boolean;
    onItemClick?: (item: ListItemProps) => void;
}

export const List = ({children, endLine, dividingLines, onItemClick, ...props}: ListProps) => {
    const childrenArray = React.Children.toArray(children);
    return (
        <div className="flex flex-col gap-2" {...props}>
            <div className="w-full h-px bg-gray-300"/>
            {childrenArray.map((child, index) => (
                <React.Fragment key={index}>
                <div key={index} className={"flex flex-col gap-2"}>
                    {child}
                    {dividingLines && (!endLine && index === childrenArray.length - 1 ? null : <div className="w-full h-px bg-gray-300"/>)}
                </div>
                </React.Fragment>
            ))}
        </div>
    );
}