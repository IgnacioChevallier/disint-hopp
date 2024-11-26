import React, {HTMLAttributes} from "react";
import { ListItemComponent, ListItemProps} from "../list-item/ListItem";

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    children: ListItemComponent | ListItemComponent[];
    endLine?: boolean;
    firstLine?: boolean;
    dividingLines?: boolean;
    onItemClick?: (item: ListItemProps) => void;
}

export const List = ({children, endLine, firstLine, dividingLines, onItemClick, ...props}: ListProps) => {
    const childrenArray = React.Children.toArray(children);
    return (
        <div className="flex flex-col gap-2" {...props}>
            {firstLine && <div className="w-full h-px bg-gray-300"/>}
            {childrenArray.map((child, index) => (
                <React.Fragment key={index}>
                <div key={index} className={"flex flex-col gap-2"}>
                    {child}
                    {dividingLines && (childrenArray.length - 1 != index) && <div className="w-full h-px bg-gray-300"/>}
                </div>
                </React.Fragment>
            ))}
            {endLine && <div className="w-full h-px bg-gray-300"/>}
        </div>
    );
}