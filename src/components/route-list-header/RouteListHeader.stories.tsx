import { Meta } from '@storybook/react';
import { iconMap } from '../icon/IconMap';
import RouteListHeader from "./RouteListHeader";

const header: Meta<typeof RouteListHeader> = {
    title: 'Common/RouteListHeader',
    component: RouteListHeader,
    tags: ['autodocs'],
    parameters: {
        layout: 'top',
    },
    argTypes: {
        locationValue: {
            control: 'text',
        },
        routeValue: {
            control: 'text',
        },
    },
};

export default header;

export const Default = {
    args: {
        locationValue: 'Location',
        routeValue: 'Route',
        filteredLocationOptions: ['Location 1', 'Location 2', 'Location 3'],
        filteredRouteOptions: ['Route 1', 'Route 2', 'Route 3'],
        leadingIconTop: 'radio button checked',
        leadingIconBottom: 'location',
    },
};