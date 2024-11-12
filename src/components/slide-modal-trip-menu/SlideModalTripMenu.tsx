import React, {useState} from 'react';
import {SlideModalBox} from "../slide-modal-box/SlideModalBox";
import {IconButton} from "../icon-button/IconButton";
import {Button} from "../button/Button";
import {List} from "../list/List";
import {ListItemProps} from "../list-item/ListItem";

export interface SlideModalTripMenuProps {
    arrivalTime: string;
    distance: string;
    time: string;
    open?: boolean;
}

const SlideModalTripMenu = ({ arrivalTime, time, distance, open} : SlideModalTripMenuProps) => {
    const [isOpen, setOpen] = useState(open);
    const menuSettings: ListItemProps[] = [
        {
            text: "Share progress of the trip",
            leadingIcon: "share",
            leadingIconSize: "small"
        },
        {
            text: "Route directions",
            leadingIcon: "alt routes",
            leadingIconSize: "small"
        },
        {
            text: "Add stop to the trip",
            leadingIcon: "add stop",
            leadingIconSize: "small"
        },
    ]

    return (
        <SlideModalBox>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-row justify-between items-center"}>
                    <IconButton iconName={"settings"} size={"large"} iconSize={"medium"} onClick={() => setOpen(!isOpen)}/>
                    <div className={"flex flex-col grow justify-center items-center"}>
                        <span className={"text-h3-regular"}> {arrivalTime} </span>
                        <span className={"text-h3-regular"}> {distance} - {time} </span>
                    </div>
                    <Button text={"Back"} size={"medium"} variant={"contained"} color={"danger"} rounded={true}/>
                </div>
                {isOpen && (
                    <List items={menuSettings} endLine={false}/>
                )}
            </div>
        </SlideModalBox>
    );
};

export default SlideModalTripMenu;
