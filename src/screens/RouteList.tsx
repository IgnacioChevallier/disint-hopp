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
        <div className="p-4 flex flex-col bg-background-main text-black min-h-screen gap-y-3">
            <div>
                <IconButton iconName="arrow back" size="small" onClick={() => navigate("/presentation")}/>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <Searchbar
                    placeholder="Search..."
                    leadingIcon="radio button checked"
                    value={locationValue}
                    onChange={handleLocationChange}
                    options={filteredLocationOptions}
                    searchBarZIndex={5}
                    dropdownZIndex={4}
                />
                <Searchbar
                    placeholder="Search..."
                    leadingIcon="location"
                    value={routeValue}
                    onChange={handleRouteChange}
                    options={filteredRouteOptions}
                    searchBarZIndex={3}
                    dropdownZIndex={2}
                />
            </div>

            <div className='flex justify-end'>
                <Dropdown
                    overlayProps={{
                        rows: [
                            {
                                left: <Icon name={"subway"} size={"small"} />,
                                label: "Subway",
                                right: <CheckBox selected={isSubwaySelected} onClick={handleSubwayToggleClick}/>
                            },
                            {
                                left: <Icon name={"bus"} size={"small"} />,
                                label: "Bus",
                                right: <CheckBox selected={isBusSelected} onClick={handleBusToggleClick}/>
                            },
                            {
                                left: <Icon name={"train"} size={"small"} />,
                                label: "Train",
                                right: <CheckBox selected={isTrainSelected} onClick={handleTrainToggleClick}/>
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

            <div>
                <TripSummaryList>
                    <TripSummary time={"1:30hrs"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"123"}/>
                        <TransportationMethod icon={"directions bus"} text={"321"}/>
                        <TransportationMethod icon={"directions bus"} text={"789"}/>
                        <TransportationMethod icon={"directions bus"} text={"1000"}/>
                    </TripSummary>
                    <TripSummary time={"2:00hrs"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"678"}/>
                        <TransportationMethod icon={"directions bus"} text={"123"}/>
                        <TransportationMethod icon={"directions bus"} text={"900"}/>
                    </TripSummary>
                    <TripSummary time={"3:00hrs"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"555"}/>
                        <TransportationMethod icon={"directions walk"} text={""}/>
                    </TripSummary>
                    <TripSummary time={"3:10hrs"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions bus"} text={"235"}/>
                        <TransportationMethod icon={"directions walk"} text={""}/>
                        <TransportationMethod icon={"directions bus"} text={"563"}/>
                    </TripSummary>
                    <TripSummary time={"8:00hrs"} onClick={() => alert("selected this route")}>
                        <TransportationMethod icon={"directions walk"} text={""}/>
                    </TripSummary>
                </TripSummaryList>
            </div>
        </div>
    );
};

export default RouteList;