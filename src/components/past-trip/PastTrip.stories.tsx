import {Meta, StoryObj} from "@storybook/react";
import {iconMap} from "../icon/IconMap";
import {PastTrip} from "./PastTrip";

const meta: Meta<typeof PastTrip> = {
    title: 'Common/PastTrip',
    component: PastTrip,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        mainIcon: {
            control: "select",
            options: [undefined, ...Array.from(iconMap.keys())]
        },
        start: {
            control: "text"
        },
        end: {
            control: "text"
        },
        price: {
            control: "text",
        },
        time: {
            control: "text"
        },
    },
};

export default meta;

type Story = StoryObj<typeof PastTrip>;

export const Home: Story = {
    args: {
        mainIcon: 'home',
        start: 'School',
        end: 'Home',
        price: '$1300',
        time: '20/11/2024 15:24',
    },
};

export const Work: Story = {
    args: {
        mainIcon: 'store',
        start: 'Home',
        end: 'Store',
        price: '$1500',
        time: '19/11/2024 15:32',
    },
};

export const School: Story = {
    args: {
        mainIcon: 'school',
        start: 'Home',
        end: 'School',
        price: '$1300',
        time: '15/11/2024 09:02',
    },
};