import {Meta, StoryObj} from "@storybook/react";
import {PastTrips} from "./PastTrips";

const meta: Meta<typeof PastTrips> = {
    title: 'Components/PastTrips',
    component: PastTrips,
    parameters: {
        layout: 'top',
    },
};

export default meta;

type Story = StoryObj<typeof PastTrips>;

export const Default: Story = {
    args: {
        items: [
            {
                mainIcon: 'home',
                start: 'School',
                end: 'Home',
                price: '$1300',
                time: '20/11/2024 15:24',
            },
            {
                mainIcon: 'store',
                start: 'Home',
                end: 'Store',
                price: '$1500',
                time: '19/11/2024 15:32',
            },
            {
                mainIcon: 'school',
                start: 'Home',
                end: 'School',
                price: '$1300',
                time: '15/11/2024 09:02',
            },
        ]
    }
};