import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { Searchbar } from "../searchbar/Searchbar";
import {IconButton} from "../icon-button/IconButton";

const RouteListHeaderStyles = cva('flex items-center text-black justify-between p-2 w-full', {
    variants: {
        type: {},
    },
});

interface RouteListHeaderProps extends VariantProps<typeof RouteListHeaderStyles> {
    locationValue: string;
    routeValue: string;
    filteredLocationOptions: string[];
    filteredRouteOptions: string[];
    handleLocationChange: (newValue: string) => void;
    handleRouteChange: (newValue: string) => void;
    iconButtonOnClick?: () => void;
    placeholderTop?: string;
    placeholderBottom?: string;
    leadingIconTop?: string;
    leadingIconBottom?: string;
}

const RouteListHeader = ({locationValue, routeValue, filteredRouteOptions, filteredLocationOptions, handleRouteChange, handleLocationChange, iconButtonOnClick, placeholderTop, placeholderBottom, leadingIconTop, leadingIconBottom }: RouteListHeaderProps) => {

    return (
        <>
            <div className="flex flex-col gap-4 p-4 w-full bg-white shadow-custom">
                <div className="flex items-center">
                    <IconButton iconName="arrow back" size="small" onClick={iconButtonOnClick} className="mr-4"/>
                    <Searchbar
                        placeholder={placeholderTop? placeholderTop : "Current Location" }
                        leadingIcon={leadingIconTop}
                        value={locationValue}
                        onChange={handleLocationChange}
                        options={filteredLocationOptions}
                        searchBarZIndex={1}
                        dropdownZIndex={100}
                        bordered
                    />
                </div>
                <Searchbar
                    placeholder={placeholderBottom? placeholderBottom : "Search..." }
                    leadingIcon={leadingIconBottom}
                    value={routeValue}
                    onChange={handleRouteChange}
                    options={filteredRouteOptions}
                    searchBarZIndex={2}
                    dropdownZIndex={3}
                    bordered
                />
            </div>
        </>
    );
};

export default RouteListHeader;