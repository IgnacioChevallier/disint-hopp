import Icon from "../icon/Icon";
import {Button} from "../button/Button";

export interface TripConfirmModalProps {
    destination: string,
    arrivalTime: string,
    icons: string[]
    onBackClick: () => void
    onStartClick: () => void
}

export const TripConfirmModal = ({destination, arrivalTime, icons, onBackClick, onStartClick}: TripConfirmModalProps) => {
    return (
        <div
            className={"w-full rounded-t-[16px] bg-background-main p-[8px] shadow-[rgba(0,0,15,0.5)_0px_-2px_3px_-1px] gap-[16px] flex-col"}>
            <div className={"mt-[10px] flex flex-row justify-between"}>
                <div>
                    <h3 className={"text-h3-extra-bold text-gray-800"}>{destination}</h3>
                    <h3 className={"text-h3-regular - text-gray-400"}>{arrivalTime}</h3>
                </div>
                <div className={"flex flex-wrap"}>
                    {icons.map((name: string) => <Icon name={name} size={"small"} color={"black"}/>)}
                </div>
            </div>
            <div className={"flex flex-row justify-end gap-[8px]"}>
                <Button text={"Back"} rounded={"full"} variant={"contained"} color={"danger"} size={"medium"} onClick={onBackClick}/>
                <Button text={"Start"} rounded={"full"} variant={"contained"} color={"primary"} size={"medium"} onClick={onStartClick}/>
            </div>
        </div>
    )
}