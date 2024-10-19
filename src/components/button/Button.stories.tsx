import {Button} from "./Button";
import {Meta, StoryObj} from "@storybook/react";
import {userEvent, within, expect, spyOn} from "@storybook/test";

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
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
            control: "boolean",
        },
        disabled: {
            control: "boolean"
        }
    },
    args: {
        onClick: () => alert("button clicked!")
    },
    play: async ({ args, canvasElement }) => {
        const alertMock = spyOn(window, 'alert').mockImplementation(() => {});

        const canvas = within(canvasElement);
        const button = canvas.getByRole('button', { name: args.text });
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
        text: 'Launch',
        leadingIcon: <span>🚀</span>,
        variant: 'contained',
        color: 'primary',
        size: 'medium',
    },
};

export const WithTrailingIcon: Story = {
    args: {
        text: 'Next',
        trailingIcon: <span>➡️</span>,
        variant: 'outlined',
        color: 'primary',
        size: 'medium',
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
