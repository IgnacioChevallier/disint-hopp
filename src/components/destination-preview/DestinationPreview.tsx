import {Button} from "../button/Button";

export interface DestinationPreviewProps {
    destination: string,
    finalStop: string,
}

export const DestinationPreview = ({destination, finalStop}: DestinationPreviewProps) => {
    return (
        <div className={"min-w-[300px] min-h-[184px] bg-white rounded-[16px] py-[16px]"}>
            <div className={"flex flex-col justify-center items-center"}>
                <h3 className={"text-h3-bold"}>{destination}</h3>
                <h1 className={"text-h1-bold"}>{finalStop}</h1>
            </div>
            <span className={"flex justify-center items-center mt-[24px]"}>
                <Button text={"View Map"} variant={"contained"} size={"small"} trailingIcon={"location"} trailingIconColor={"white"} />
            </span>
        </div>
    )
}