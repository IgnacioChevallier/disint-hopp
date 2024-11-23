import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
    title: "Buttons/Toggle",
    component: Toggle,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        selected: {
            control: "boolean",
        },
    },
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    render: (args) => {
        const [_, updateArgs] = useArgs();
        const handleClick = () => {
            updateArgs({ selected: !args.selected });
        };

        return <Toggle selected={args.selected} onClick={handleClick} />;
    },
    args: {
        selected: false,
    },
};
