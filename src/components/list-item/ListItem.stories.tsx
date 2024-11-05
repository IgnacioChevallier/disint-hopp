import {ListItem} from "./ListItem";
import {Meta, StoryObj} from "@storybook/react";


const meta: Meta<typeof ListItem> = {
    title: 'Components/ListItem',
    component: ListItem,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        controlType: {
            control: "select",
            options: ["checkbox", "radio", "toggle"]
        },
        additionalText: {
            control: "text"
        }
    },
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
    args: {
        text: 'List Item Example',
        color: 'primary',
    },
};
