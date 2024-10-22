import {Meta, StoryObj} from "@storybook/react";
import {Toggle} from "./Toggle";

const meta: Meta<typeof Toggle> = {
    title: 'Components/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        selected: {
            control: "boolean",
            options: [true, false]
        }
    },
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    args: {
        selected: false,
        onClick: () => {}
    },
};
