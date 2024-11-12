import React, {useState} from 'react';
import {SlideModalBox} from "../slide-modal-box/SlideModalBox";
import {IconButton} from "../icon-button/IconButton";
import {Button} from "../button/Button";

export interface SlideModalTripMenuProps {
    arrivalTime: string;
    distance: string;
    time: string;
}

const SlideModalTripMenu = ({ arrivalTime, time, distance} : SlideModalTripMenuProps) => {
    const [open, setOpen] = useState(false);

    return (
        <SlideModalBox>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-row justify-between items-center"}>
                    <IconButton iconName={"settings"} size={"large"} iconSize={"medium"}/>
                    <div className={"flex flex-col grow justify-center items-center"}>
                        <span className={"text-h3-regular"}> {arrivalTime} </span>
                        <span className={"text-h3-regular"}> {distance} - {time} </span>
                    </div>
                    <Button text={"Back"} size={"medium"} variant={"contained"} color={"danger"} rounded={true}/>
                </div>
                {open && (
                    <>
                    </>
                )}
            </div>
        </SlideModalBox>
    );
};

export default SlideModalTripMenu;
