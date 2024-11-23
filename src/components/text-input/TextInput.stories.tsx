import {Meta, StoryObj} from "@storybook/react";
import {TextInput} from "./TextInput";

const meta: Meta<typeof TextInput> = {
    title: 'Common/TextInput',
    component: TextInput,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "danger", "gray"]
        },
        disabled: {
            control: "boolean"
        },
        rounded: {
            control: "boolean"
        }
    },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
    args: {
        label: 'Username',
        color: "primary",
        placeholder: "Username...",
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled',
        disabled: true,
        color: "gray",
        value: "readonly",
    },
};
