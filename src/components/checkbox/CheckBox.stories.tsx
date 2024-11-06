import {Meta, StoryObj} from "@storybook/react";
import {CheckBox} from "./CheckBox";

const meta: Meta<typeof CheckBox> = {
    title: 'Components/CheckBox',
    component: CheckBox,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        selected: {
            control: "boolean",
        }
    },
}
export default meta;

type Story = StoryObj<typeof CheckBox>;
export const Default: Story = {
    args: {
        selected: false,
    }
};

export const Selected: Story = {
    args: {
        selected: true,
    }
};