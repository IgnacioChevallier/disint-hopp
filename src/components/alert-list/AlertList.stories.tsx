import { Meta, StoryObj } from "@storybook/react";
import { AlertList } from "./AlertList";

const meta: Meta<typeof AlertList> = {
    title: 'Components/AlertList',
    component: AlertList,
    parameters: {
        layout: 'top',
    },
    argTypes: {
        alerts: { table: { disable: true } },
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
                text: "Lines 123, 434, 843, 945 currently affected by strike",
                time: "6:34 am",
                icon: 'bus alert'
            },
            {
                active: true,
                link: true,
                href: "https://example.com",
                text: "Another active alert with a link",
                time: "6:24 am",
                icon: 'bus alert'
            },
            {
                active: false,
                link: false,
                href: "",
                text: "This is an inactive alert without a link",
                time: "11:00 am",
                icon: 'calendar clock'
            },
            {
                active: false,
                link: false,
                href: "",
                text: "This is an inactive alert without a link",
                time: "4:11 pm",
                icon: 'calendar clock'
            }
        ]
    }
};
