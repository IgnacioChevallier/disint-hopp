import {Dropdown} from "../components/dropdown/Dropdown";
import React, {useState} from "react";
import {CheckBox} from "../components/checkbox/CheckBox";
import {TripSummaryList} from "../components/trip-summary-list/TripSummaryList";
import {TripSummary} from "../components/trip-summary/TripSummary";
import {TransportationMethod} from "../components/transportation-method/TransportationMethod";
import {useNavigate} from "react-router-dom";
import Icon from "../components/icon/Icon";
import {LocationInformation} from "../components/location-information/LocationInformation";
import RouteListHeader from "../components/route-list-header/RouteListHeader";
import {LocationImageCarousel} from "../components/location-image-carousel/LocationImageCarousel";

const RouteList = () => {
    const places = [
        "University of Chicago",
        "University of Illinois at Chicago",
        "Northwestern University",
        "Central Station",
        "Union Station",
        "Tower City",
        "University of Michigan",
    ];

    const getImages = (size: "small" | "medium" | "auto") => {
        return [
            {
                src: "https://www.usnews.com/cmsmedia/5c/38cc5da3a6a0f690dd7f46438ae170/Above-Cobb-Gate.jpg",
                alt: "University of Chicago",
                size
            },
            {
                src: "https://www.edvisehub.com/wp-content/uploads/2022/11/UChicagoUpdate_0912.jpg",
                alt: "University of Chicago",
                size
            },
            {
                src: "https://www.chicagomag.com/wp-content/archive/images/2011/0311/C201103-U-of-C-campus.jpg",
                alt: "University of Chicago",
                size
            }
        ];
    }

    const [locationValue, setLocationValue] = useState("Current Location");
    const [routeValue, setRouteValue] = useState("University of Chicago");
    const [filteredLocationOptions, setFilteredLocationOptions] = useState(places.filter(alert => alert.toLowerCase().includes(locationValue.toLowerCase())));
    const [filteredRouteOptions, setFilteredRouteOptions] = useState(places.filter(alert => alert.toLowerCase().includes(routeValue.toLowerCase())));
    const navigate = useNavigate()

    const [isSubwaySelected, setIsSubwaySelected] = useState(false);
    const [isBusSelected, setIsBusSelected] = useState(false);
    const [isTrainSelected, setIsTrainSelected] = useState(false);

    const [isCarouselOpen, setIsCarouselOpen] = useState<boolean>(false);
    const [initialCarouselImage, setInitialCarouselImage] = useState<number>(0);

    const handleSubwayToggleClick = () =>{
        setIsSubwaySelected(!isSubwaySelected);
    }

    const handleBusToggleClick = () => {
        setIsBusSelected(!isBusSelected);
    }

    const handleTrainToggleClick = () => {
        setIsTrainSelected(!isTrainSelected);
    }

    // Handle autocomplete for location
    const handleLocationChange = (newValue: string) => {
        setLocationValue(newValue);
        setFilteredLocationOptions(
            places.filter(alert => alert.toLowerCase().includes(newValue.toLowerCase()))
        );
    };

    // Handle autocomplete for route
    const handleRouteChange = (newValue: string) => {
        setRouteValue(newValue);
        setFilteredRouteOptions(
            places.filter(alert => alert.toLowerCase().includes(newValue.toLowerCase()))
        );
    };

    const onImageClick = (index: number) => {
        setInitialCarouselImage(index);
        setIsCarouselOpen(true);
    }

    return (
        <div className="flex flex-col h-full w-full bg-background-main">
            <RouteListHeader
                locationValue={locationValue}
                routeValue={routeValue}
                filteredLocationOptions={filteredLocationOptions}
                filteredRouteOptions={filteredRouteOptions}
                handleLocationChange={handleLocationChange}
                handleRouteChange={handleRouteChange}
                placeholderTop={"Current Location"}
                placeholderBottom={"Search..."}
                leadingIconTop={"radio button checked"}
                leadingIconBottom={"location"}
                iconButtonOnClick={() => navigate("/presentation")}
            />
            <div className="p-4 flex flex-col gap-y-3">
                <div className="flex justify-end">
                    <Dropdown
                        overlayProps={{
                            rows: [
                                {
                                    left: <Icon name={"subway"} size={"small"}/>,
                                    label: "Subway",
                                    right: <CheckBox selected={isSubwaySelected} onClick={handleSubwayToggleClick}
                                                     size={"medium"}/>
                                },
                                {
                                    left: <Icon name={"bus"} size={"small"}/>,
                                    label: "Bus",
                                    right: <CheckBox selected={isBusSelected} onClick={handleBusToggleClick}
                                                     size={"medium"}/>
                                },
                                {
                                    left: <Icon name={"train"} size={"small"}/>,
                                    label: "Train",
                                    right: <CheckBox selected={isTrainSelected} onClick={handleTrainToggleClick}
                                                     size={"medium"}/>
                                }
                            ]
                        }}
                        buttonProps={{
                            leadingIcon: "filter",
                            text: "Filter",
                            color: "primary",
                            variant: "outlined",
                            trailingIcon: "arrow down",
                            rounded: "full",
                            size: "medium",
                            disableHover: true,
                        }}
                        overlayAlignment={"right"}
                    />
                </div>
            </div>
            <div>
                {isCarouselOpen && <LocationImageCarousel images={getImages("auto")} index={initialCarouselImage} onClose={() => {setIsCarouselOpen(false)}}/>}
            </div>

            <div className="flex-grow overflow-y-auto">
                <TripSummaryList className="pb-32 mb-8">
                    <TripSummary time={"2:00pm - 2:45pm"} duration={"45min"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"678"} duration={"15min"} color={"blue"}/>
                        <TransportationMethod icon={"directions bus"} text={"123"} duration={"5min"} color={"darkBlue"}/>
                        <TransportationMethod icon={"directions bus"} text={"900"} duration={"5min"} color={"pink"}/>
                        <TransportationMethod icon={"directions bus"} text={"321"} duration={"20min"} color={"blue"}/>
                    </TripSummary>
                    <TripSummary time={"1:50pm - 2:48pm"} duration={"53min"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"555"} duration={"15min"} color={"yellow"}/>
                        <TransportationMethod icon={"directions walk"} text={""} duration={"38min"} color={"gray"}/>
                    </TripSummary>
                    <TripSummary time={"2:10pm - 3:00pm"} duration={"50min"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"235"} duration={"15min"} color={"blue"}/>
                        <TransportationMethod icon={"directions walk"} text={""} duration={"20min"} color={"gray"}/>
                        <TransportationMethod icon={"directions bus"} text={"563"} duration={"15min"}
                                              color={"darkBlue"}/>
                    </TripSummary>
                    <TripSummary time={"1:43pm - 4:43pm"} duration={"3hrs"}
                                 onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions walk"} text={""} duration={"3hrs"} color={"blue"}/>
                    </TripSummary>
                </TripSummaryList>
            </div>
            <div className="fixed bottom-0 left-0 right-0">
                <LocationInformation
                    name="University of Chicago"
                    images={getImages("small")}
                    positionAtBottom={true}
                    onImageClick={onImageClick}
                />
            </div>
        </div>

    );
};

export default RouteList;