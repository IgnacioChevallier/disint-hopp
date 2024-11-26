import {Dropdown} from "../components/dropdown/Dropdown";
import React, {useState} from "react";
import {CheckBox} from "../components/checkbox/CheckBox";
import {Searchbar} from "../components/searchbar/Searchbar";
import {IconButton} from "../components/icon-button/IconButton";
import {TripSummaryList} from "../components/trip-summary-list/TripSummaryList";
import {TripSummary} from "../components/trip-summary/TripSummary";
import {TransportationMethod} from "../components/transportation-method/TransportationMethod";
import {useNavigate} from "react-router-dom";
import Icon from "../components/icon/Icon";
import {LocationInformation} from "../components/location-information/LocationInformation";
import {LocationImageProps} from "../components/location-image/LocationImage";
import RouteListHeader from "../components/route-list-header/RouteListHeader";

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

    const images: LocationImageProps[] = [
        {
            src: "https://www.usnews.com/cmsmedia/5c/38cc5da3a6a0f690dd7f46438ae170/Above-Cobb-Gate.jpg",
            alt: "University of Chicago",
            size: "small"
        },
        {
            src: "https://www.edvisehub.com/wp-content/uploads/2022/11/UChicagoUpdate_0912.jpg",
            alt: "University of Chicago",
            size: "small"
        },
        {
            src: "https://www.chicagomag.com/wp-content/archive/images/2011/0311/C201103-U-of-C-campus.jpg",
            alt: "University of Chicago",
            size: "small"
        }
    ];

    const [locationValue, setLocationValue] = useState("Current Location");
    const [routeValue, setRouteValue] = useState("University of Chicago");
    const [filteredLocationOptions, setFilteredLocationOptions] = useState(places.filter(alert => alert.toLowerCase().includes(locationValue.toLowerCase())));
    const [filteredRouteOptions, setFilteredRouteOptions] = useState(places.filter(alert => alert.toLowerCase().includes(routeValue.toLowerCase())));
    const navigate = useNavigate()

    const [isSubwaySelected, setIsSubwaySelected] = useState(false);
    const [isBusSelected, setIsBusSelected] = useState(false);
    const [isTrainSelected, setIsTrainSelected] = useState(false);


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
                                                     size={"md"}/>
                                },
                                {
                                    left: <Icon name={"bus"} size={"small"}/>,
                                    label: "Bus",
                                    right: <CheckBox selected={isBusSelected} onClick={handleBusToggleClick}
                                                     size={"md"}/>
                                },
                                {
                                    left: <Icon name={"train"} size={"small"}/>,
                                    label: "Train",
                                    right: <CheckBox selected={isTrainSelected} onClick={handleTrainToggleClick}
                                                     size={"md"}/>
                                }
                            ]
                        }}
                        buttonProps={{
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
            <div className="flex-grow overflow-y-auto">
                <TripSummaryList className="pb-32 mb-8">
                    <TripSummary time={"1:30pm - 2:10pm"} duration={"40min"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"123"} duration={"15min"} color={"blue"}/>
                        <TransportationMethod icon={"directions bus"} text={"321"} duration={"15min"} color={"blue"}/>
                        <TransportationMethod icon={"directions bus"} text={"789"} duration={"5min"} color={"blue"}/>
                        <TransportationMethod icon={"directions bus"} text={"1000"} duration={"5min"} color={"blue"}/>
                    </TripSummary>
                    <TripSummary time={"2:00pm - 2:45pm"} duration={"45min"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"678"} duration={"15min"} color={"blue"}/>
                        <TransportationMethod icon={"directions bus"} text={"123"} duration={"15min"} color={"darkBlue"}/>
                        <TransportationMethod icon={"directions bus"} text={"900"} duration={"15min"} color={"pink"}/>
                    </TripSummary>
                    <TripSummary time={"1:50pm - 2:50pm"} duration={"1hrs"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"555"} duration={"15min"} color={"yellow"}/>
                        <TransportationMethod icon={"directions walk"} text={""} duration={"45min"} color={"gray"}/>
                    </TripSummary>
                    <TripSummary time={"2:10pm - 2:55pm"} duration={"45min"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"235"} duration={"15min"} color={"blue"}/>
                        <TransportationMethod icon={"directions walk"} text={""} duration={"15min"} color={"gray"}/>
                        <TransportationMethod icon={"directions bus"} text={"563"} duration={"15min"} color={"darkBlue"}/>
                    </TripSummary>
                    <TripSummary time={"1:25pm - 9:25pm"} duration={"8hrs"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions walk"} text={""} duration={"30min"} color={"blue"}/>
                    </TripSummary>
                </TripSummaryList>
            </div>
            <div className="fixed bottom-0 left-0 right-0">
                <LocationInformation
                    name="University of Chicago"
                    images={images}
                    positionAtBottom={true}
                />
            </div>
        </div>

    );
};

export default RouteList;