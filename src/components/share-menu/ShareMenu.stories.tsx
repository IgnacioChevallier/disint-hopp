import { Meta, StoryObj } from "@storybook/react";
import {ShareMenu} from "./ShareMenu";

const meta: Meta<typeof ShareMenu> = {
    title: "Components/ShareMenu",
    component: ShareMenu,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        iconList: {
            control: {
                type: 'object',
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof ShareMenu>;

export const Default: Story = {
    args: {
        link: "https://www.google.com",
        iconList: [
            { name: "facebook", size: "medium" },
            { name: "x", size: "medium" },
            { name: "whatsapp", size: "medium" },
            { name: "telegram", size: "medium" },
        ],
    },
    render: (args) => {
        return <ShareMenu {...args} />;
    },
};
