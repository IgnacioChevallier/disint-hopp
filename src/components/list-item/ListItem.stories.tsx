import {ListItem} from "./ListItem";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof ListItem> = {
    title: 'Components/ListItem',
    component: ListItem,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "danger", "gray"]
        },
    },
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
    args: {
        text: '5th Avenue',
        color: 'primary',
    },
};
