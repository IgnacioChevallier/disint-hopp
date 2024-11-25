import {useState} from "react";
import {LocationImage, LocationImageProps} from "../location-image/LocationImage";
import {IconButton} from "../icon-button/IconButton";

export const locationImageCarousel = "flex items-center gap-2 w-full h-full min-h-[300px]";

export interface LocationImageCarouselProps {
    images: LocationImageProps[];
    index?: number;
}

export const LocationImageCarousel = ({images, index}: LocationImageCarouselProps) => {
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
            <IconButton
                iconName="chevron left"
                size="medium"
                iconSize={"small"}
                disabled={currentIndex === 0}
                onClick={handleLeft}
            />

            <div className="flex-shrink-0">
                <LocationImage {...images[currentIndex]} />
            </div>

            <IconButton
                iconName="chevron right"
                size="medium"
                iconSize={"small"}
                disabled={currentIndex === images.length - 1}
                onClick={handleRight}
            />
        </div>
    );
};
