import React from 'react';
import { Alert } from "../components/alert/Alert";
import { Searchbar } from '../components/searchbar/Searchbar';
import {Dropdown} from "../components/dropdown/Dropdown";
import {Toggle} from "../components/toggle/Toggle";
import {CheckBox} from "../components/checkbox/CheckBox";
import {IconButton} from "../components/icon-button/IconButton";
import {useNavigate} from "react-router-dom";

const Notifications = () => {
    const alerts = [
        "Line 123",
        "Line 134",
        "Line 843",
        "Line 947",
        "Line 988",
        "Line 256",
    ];

    const [isAllSelected, setIsAllSelected] = React.useState(false);
    const [isFavoritesSelected, setIsFavoritesSelected] = React.useState(false);
    const [isOngoingSelected, setIsOngoingSelected] = React.useState(false);
    const navigate = useNavigate();
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
        <div className="p-4 flex flex-col bg-background-main text-black min-h-screen gap-y-3">
            <div className="flex items-center justify-center relative">
                <IconButton iconName="arrow back" size="small" className="absolute left-0" onClick={() => navigate("/presentation")}/>
                <span className="text-h2-regular">
                    Alerts
                </span>
            </div>

            <div className="w-full">
                <Searchbar
                    placeholder="Search..."
                    leadingIcon=""
                    trailingIcon="search"
                    options={alerts}
                />
            </div>

            <div className='flex justify-end'>
                <Dropdown
                    overlayProps={{
                        rows: [
                            {
                                label: "All",
                                right: (<Toggle selected={isAllSelected} onClick={handleAllToggleClick} />)
                            },
                            {
                                label: "Favorites",
                                right: <CheckBox selected={isFavoritesSelected} onClick={handleFavoritesToggleClick} size={"md"}/>
                            },
                            {
                                label: "Ongoing",
                                right: <CheckBox selected={isOngoingSelected} onClick={handleOngoingToggleClick} size={"md"}/>
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
                    time="6:30 am"
                    icon="bus alert"
                />
                <Alert
                    active={false}
                    link={false}
                    href=""
                    text="Unexpected incident on Line 123. Delays expected."
                    time="8:00 am"
                    icon="calendar clock"
                />
                <Alert
                    active={false}
                    link={false}
                    href=""
                    text="Line 123 will be temporarily unavailable from 10 pm to 5 am."
                    time="10:00 pm"
                    icon="calendar clock"
                />
            </div>
        </div>
    );
};

export default Notifications;