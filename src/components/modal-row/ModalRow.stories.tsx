import { Meta, StoryObj } from "@storybook/react";
import { iconMap } from "../icon/IconMap";
import {ModalRow} from "./ModalRow";

const meta: Meta<typeof ModalRow> = {
    title: 'Components/ModalRow',
    component: ModalRow,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        leftIconName: {
            control: "select",
            options: Array.from(iconMap.keys())
        },
        label: {
            control: "text"
        },
        rightIconName: {
            control: "select",
            options: Array.from(iconMap.keys())
        }
    },
}

export default meta;

type Story = StoryObj<typeof ModalRow>;

export const Default: Story = {
    args: {
        leftIconName: "placeholder",
        label: "Option",
        rightIconName: "placeholder"
    }
}