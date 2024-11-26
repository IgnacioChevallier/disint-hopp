import React, { useEffect, useRef, useState } from 'react';
import { Alert } from "../components/alert/Alert";
import { Searchbar } from '../components/searchbar/Searchbar';
import { Dropdown } from "../components/dropdown/Dropdown";
import { Toggle } from "../components/toggle/Toggle";
import { CheckBox } from "../components/checkbox/CheckBox";
import { IconButton } from "../components/icon-button/IconButton";
import { Sidebar } from "../components/sidebar/Sidebar";
import { SidebarElement } from "../components/sidebar-element/SidebarElement";
import Header from "../components/header/Header";

const Notifications = () => {
    const alerts = [
        "Line 123",
        "Line 134",
        "Line 843",
        "Line 947",
        "Line 988",
        "Line 256",
    ];

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [isFavoritesSelected, setIsFavoritesSelected] = useState(false);
    const [isOngoingSelected, setIsOngoingSelected] = useState(false);
    const [selectedElement, setSelectedElement] = useState<number>(3);
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setIsSidebarOpen(false);
        }
    };

    useEffect(() => {
        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isSidebarOpen]);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleAllToggleClick = () => {
        setIsAllSelected(!isAllSelected);
    };

    const handleFavoritesToggleClick = () => {
        setIsFavoritesSelected(!isFavoritesSelected);
    };

    const handleOngoingToggleClick = () => {
        setIsOngoingSelected(!isOngoingSelected);
    };

    return (
        <div>
            <div>
                <Header
                    title={"Alerts"}
                    leadingIconName="sidebar"
                    leadingOnClick={handleSidebarToggle}
                    showSearchbar={true}
                    options={alerts}
                    placeholder={"Search"}
                />
            </div>
            <div className="p-4 flex flex-col bg-background-main text-black min-h-screen gap-y-3 relative pt-[154px]">
                {/*{isSidebarOpen && (*/}
                {/*    <div*/}
                {/*        className="fixed inset-0 bg-black bg-opacity-50 z-40"*/}
                {/*        onClick={() => setIsSidebarOpen(false)}*/}
                {/*    />*/}
                {/*)}*/}

                {/*{isSidebarOpen && (*/}
                {/*    <div*/}
                {/*        ref={sidebarRef}*/}
                {/*        className="absolute left-0 top-0 z-50"*/}
                {/*    >*/}
                {/*        <Sidebar>*/}
                {/*            <SidebarElement*/}
                {/*                selected={selectedElement === 0}*/}
                {/*                icon={"search"}*/}
                {/*                text={"Search"}*/}
                {/*                onClick={() => setSelectedElement(0)}*/}
                {/*            />*/}
                {/*            <SidebarElement*/}
                {/*                selected={selectedElement === 1}*/}
                {/*                icon={"groups"}*/}
                {/*                text={"Family Group"}*/}
                {/*                onClick={() => setSelectedElement(1)}*/}
                {/*            />*/}
                {/*            <SidebarElement*/}
                {/*                selected={selectedElement === 2}*/}
                {/*                icon={"history"}*/}
                {/*                text={"Trip History"}*/}
                {/*                onClick={() => setSelectedElement(2)}*/}
                {/*            />*/}
                {/*            <SidebarElement*/}
                {/*                selected={selectedElement === 3}*/}
                {/*                icon={"bus alert"}*/}
                {/*                text={"Alerts"}*/}
                {/*                onClick={() => setSelectedElement(3)}*/}
                {/*            />*/}
                {/*            <SidebarElement*/}
                {/*                selected={selectedElement === 4}*/}
                {/*                icon={"account circle"}*/}
                {/*                text={"Account"}*/}
                {/*                onClick={() => setSelectedElement(4)}*/}
                {/*            />*/}
                {/*        </Sidebar>*/}
                {/*    </div>*/}
                {/*)}*/}


                {/*FIXME: Rompe las imagenes de las alertas y no toco nada de ese codigo*/}

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                <div
                    ref={sidebarRef}
                    className={`
                    fixed top-0 left-0 h-full z-50 bg-background-main w-64 
                    transform transition-transform duration-300 
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                `}
                >
                    <Sidebar>
                        <SidebarElement
                            selected={selectedElement === 0}
                            icon={"search"}
                            text={"Search"}
                            onClick={() => setSelectedElement(0)}
                        />
                        <SidebarElement
                            selected={selectedElement === 1}
                            icon={"groups"}
                            text={"Family Group"}
                            onClick={() => setSelectedElement(1)}
                        />
                        <SidebarElement
                            selected={selectedElement === 2}
                            icon={"history"}
                            text={"Trip History"}
                            onClick={() => setSelectedElement(2)}
                        />
                        <SidebarElement
                            selected={selectedElement === 3}
                            icon={"bus alert"}
                            text={"Alerts"}
                            onClick={() => setSelectedElement(3)}
                        />
                        <SidebarElement
                            selected={selectedElement === 4}
                            icon={"account circle"}
                            text={"Account"}
                            onClick={() => setSelectedElement(4)}
                        />
                    </Sidebar>
                </div>


                <div className="flex justify-end">
                    <Dropdown
                        overlayProps={{
                            rows: [
                                {
                                    label: "All",
                                    right: <Toggle selected={isAllSelected} onClick={handleAllToggleClick} />,
                                },
                                {
                                    label: "Favorites",
                                    right: <CheckBox
                                        selected={isFavoritesSelected}
                                        onClick={handleFavoritesToggleClick}
                                        size={"medium"}
                                    />,
                                },
                                {
                                    label: "Ongoing",
                                    right: <CheckBox
                                        selected={isOngoingSelected}
                                        onClick={handleOngoingToggleClick}
                                        size={"medium"}
                                    />,
                                },
                            ],
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
                        time="9:00 pm"
                        icon="calendar clock"
                    />
                </div>
            </div>
        </div>
    );
};

export default Notifications;