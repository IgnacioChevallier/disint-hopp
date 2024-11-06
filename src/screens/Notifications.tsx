import React from 'react';
import { Alert } from "../components/alert/Alert";
import { Searchbar } from '../components/searchbar/Searchbar';
import { iconMap } from "../components/icon/IconMap";
import {Dropdown} from "../components/dropdown/Dropdown";
import {Toggle} from "../components/toggle/Toggle";
import {CheckBox} from "../components/checkbox/CheckBox";

const Notifications = () => {
    const BackIcon = iconMap.get('arrow back');

    const alerts = [
        "Lines 123, 434, 843, 947 currently affected by service issues.",
        "High passenger volume on Line 843 due to local events.",
        "Line 123 will be temporarily unavailable from 10 pm to 5 am.",
        "Unexpected incident on Line 123. Delays expected."
    ];

    const [isAllSelected, setIsAllSelected] = React.useState(false);
    const [isFavoritesSelected, setIsFavoritesSelected] = React.useState(false);
    const [isOngoingSelected, setIsOngoingSelected] = React.useState(false);

    const handleAllToggleClick = () =>{
        setIsAllSelected(!isAllSelected);
    }

    const handleFavoritesToggleClick = () =>{
        setIsFavoritesSelected(!isFavoritesSelected);
    }

    const handleOngoingToggleClick = () => {
        setIsOngoingSelected(!isOngoingSelected);
    }

    return (
        <div className="p-4 bg-background-main text-black min-h-screen">
            {/* Header */}
            <header className="flex items-center mb-4">
                <button className="bg-none border-none cursor-pointer text-black">
                    {BackIcon && BackIcon(24, "black")}
                </button>
                <h1 className="flex-1 text-center text-h1-bold m-0">Alerts</h1>
            </header>

            {/* Searchbar */}
            <div className="mb-4 w-full">
                <Searchbar
                    placeholder="Search..."
                    left_icon=""
                    right_icon="search"
                    options={alerts}
                />
            </div>

            {/* Filter dropdown */}
            <div className='flex justify-end mb-4'>
                <Dropdown
                    overlayProps={{
                        rows: [
                            {
                                label: "All",
                                right: (<Toggle selected={isAllSelected} onClick={handleAllToggleClick}/>)
                            },
                            {
                                label: "Favorites",
                                right: <CheckBox selected={isFavoritesSelected}
                                                 onClick={handleFavoritesToggleClick}/>
                            },
                            {
                                label: "Ongoing",
                                right: <CheckBox selected={isOngoingSelected} onClick={handleOngoingToggleClick}/>
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


            {/* List of Alerts */}
            <div className="flex flex-col gap-2 w-full">
                <Alert
                    active={true}
                    link={false}
                    href=""
                    text="Lines 123, 434, 843, 947 currently affected by service issues."
                    time="6:24 am"
                    icon="bus alert"
                />
                <Alert
                    active={true}
                    link={false}
                    href=""
                    text="High passenger volume on Line 843 due to local events."
                    time="6:24 am"
                    icon="bus alert"
                />
                <Alert
                    active={false}
                    link={false}
                    href=""
                    text="Line 123 will be temporarily unavailable from 10 pm to 5 am."
                    time="6:24 am"
                    icon="calendar clock"
                />
                <Alert
                    active={false}
                    link={false}
                    href=""
                    text="Unexpected incident on Line 123. Delays expected."
                    time="6:24 am"
                    icon="calendar clock"
                />
            </div>
        </div>
    );
};

export default Notifications;