import {Meta, StoryObj} from "@storybook/react";
import {userEvent, within, expect, spyOn} from "@storybook/test";
import {iconMap} from "../icon/IconMap";
import {Button} from "./Button";

const meta: Meta<typeof Button> = {
    title: 'Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        onClick: {table: {disable: true}},
        leadingIcon: {
            control: "select",
            options: [...Array.from(iconMap.keys()), undefined],
        },
        trailingIcon: {
            control: "select",
            options: [...Array.from(iconMap.keys()), undefined],
        },
        size: {
            control: "select",
            options: ["small", "medium"],
        },
        variant: {
            control: "select",
            options: ["contained", "outlined", "text"],
        },
        color: {
            control: "select",
            options: ["primary", "danger", "gray"]
        },
        rounded: {
            control: "select",
            options: ["false", "true", "full"]
        },
        disabled: {
            control: "boolean"
        },
        trailingIconColor: {
            control: "select",
            options: ["primary", "danger", "gray"]
        },
        leadingIconColor: {
            control: "select",
            options: ["primary", "danger", "gray"]
        },
        leadingIconSize: {
            control: "select",
            options: ["small", "medium", "large"]
        },
        trailingIconSize: {
            control: "select",
            options: ["small", "medium", "large"]
        },
    },
    args: {
        onClick: () => alert("button clicked!")
    },
    play: async ({args, canvasElement}) => {
        const alertMock = spyOn(window, 'alert').mockImplementation(() => {
        });

        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', {name: args.text});
        await userEvent.click(button);
        await expect(alertMock).toHaveBeenCalledWith("button clicked!");

        alertMock.mockRestore();
    },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        text: 'Click Me',
        variant: 'contained',
        color: 'primary',
        size: 'medium',
        rounded: 'full',
    },
};

export const Cancel: Story = {
    args: {
        text: 'Cancel',
        variant: 'contained',
        color: 'danger',
        size: 'medium',
        rounded: 'full',
        bold: true,
    },
};

export const Start: Story = {
    args: {
        text: 'Start',
        variant: 'contained',
        color: 'primary',
        size: 'medium',
        rounded: 'full',
        bold: true,
    },
};


export const Outlined: Story = {
    args: {
        text: 'Click Me',
        variant: 'outlined',
        color: 'danger',
        size: 'medium',
    },
};


export const Text: Story = {
    args: {
        text: 'Click Me',
        variant: 'text',
        color: 'gray',
        size: 'medium',
    },
};

export const WithLeadingIcon: Story = {
    args: {
        text: 'Back',
        leadingIcon: "arrow back",
        variant: 'contained',
        color: 'primary',
        leadingIconSize: 'small',
        size: 'medium',
        bold: true,
    },
};

export const WithTrailingIcon: Story = {
    args: {
        text: 'Add',
        trailingIcon: "add",
        variant: 'outlined',
        color: 'primary',
        size: 'medium',
        trailingIconSize: 'small',
        bold: true,
    },
};

export const Disabled: Story = {
    args: {
        text: 'Disabled',
        variant: 'contained',
        color: 'gray',
        size: 'medium',
        disabled: true
    },
};
