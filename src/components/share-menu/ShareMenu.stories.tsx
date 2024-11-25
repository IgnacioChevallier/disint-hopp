import { Meta, StoryObj } from "@storybook/react";
import {ShareMenu} from "./ShareMenu";

const meta: Meta<typeof ShareMenu> = {
    title: "Modals/ShareMenu",
    component: ShareMenu,
    tags: ['autodocs'],
    parameters: {
        layout: "top",
    },
    decorators: [
        (Story) => (
            <div style={{ paddingTop: '50%' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        iconList: {
            table: {
                disable: true
            }
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
