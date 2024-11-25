import {cva} from "class-variance-authority";
import {LocationImage, LocationImageProps} from "../location-image/LocationImage";

export const locationInformation = cva("flex flex-col gap-[10px] w-full z-10 w-full" +
    " rounded-t-[16px] bg-background-main p-[16px] shadow-[rgba(0,0,15,0.5)_0px_-2px_3px_-1px]");

interface LocationInformationProps {
    name: string;
    images: LocationImageProps[];
    positionAtBottom?: boolean;
}

export const LocationInformation = ({name, images, positionAtBottom = false}: LocationInformationProps) => {
    return (
        <div
            className={`${locationInformation()} ${
                positionAtBottom ? "absolute bottom-0 left-0 w-full z-50" : ""
            }`}
        >
            <span className="text-h3-extra-bold">
                {name}
            </span>
            <div className="flex flex-row gap-2 w-full overflow-x-auto custom-scrollbar">
                {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0">
                        <LocationImage {...image} />
                    </div>
                ))}
            </div>
        </div>
    );
};
