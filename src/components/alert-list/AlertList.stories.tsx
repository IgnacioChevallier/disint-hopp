import { Meta, StoryObj } from "@storybook/react";
import { AlertList } from "./AlertList";

const meta: Meta<typeof AlertList> = {
    title: 'Components/AlertList',
    component: AlertList,
    parameters: {
        layout: 'top',
    },
};

export default meta;

type Story = StoryObj<typeof AlertList>;

export const Default: Story = {
    args: {
        alerts: [
            {
                active: true,
                link: true,
                href: "https://example.com",
                text: "This is an active alert with a link",
                time: "6:34 am",
                icon: 'placeholder'
            },
            {
                active: true,
                link: true,
                href: "https://example.com",
                text: "Another active alert with a link",
                time: "6:24 am",
                icon: 'placeholder'
            },
            {
                active: false,
                link: false,
                href: "",
                text: "This is an inactive alert without a link",
                time: "11:00 am",
                icon: 'placeholder'
            }
        ]
    }
};
