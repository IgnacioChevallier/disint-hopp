import React, {useState} from "react";
import {LocationImage, LocationImageProps} from "../location-image/LocationImage";
import {IconButton} from "../icon-button/IconButton";

export const locationImageCarousel = "fixed inset-0 flex justify-center items-center z-[100]";

export interface LocationImageCarouselProps {
    images: LocationImageProps[];
    index?: number;
    onClose: () => void;
}

export const LocationImageCarousel = ({images, index, onClose}: LocationImageCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(index || 0);

    const handleLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleRight = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    return (
        <div className={locationImageCarousel}>
            <div className="z-10">
                <div className="fixed left-0 top-1/2 transform -translate-y-1/2">
                    <IconButton
                        iconName="chevron left"
                        size="medium"
                        iconSize={"small"}
                        disabled={currentIndex === 0}
                        onClick={handleLeft}
                    />
                </div>

                <div className="mx-8">
                    <LocationImage {...images[currentIndex]} />
                </div>

                <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
                    <IconButton
                        iconName="chevron right"
                        size="medium"
                        iconSize={"small"}
                        disabled={currentIndex === images.length - 1}
                        onClick={handleRight}
                    />
                </div>
            </div>
            <div className={"fixed inset-0 bg-black bg-opacity-50 z-0"} onClick={onClose}/>
        </div>
    );
};
