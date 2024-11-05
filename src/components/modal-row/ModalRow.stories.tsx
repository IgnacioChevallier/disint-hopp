import { Meta, StoryObj } from "@storybook/react";
import {ModalRow} from "./ModalRow";
import Icon from "../icon/Icon";
import {CheckBox} from "../checkbox/CheckBox";

const meta: Meta<typeof ModalRow> = {
    title: 'Components/ModalRow',
    component: ModalRow,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: {
            control: "text"
        }
    },
}

export default meta;

type Story = StoryObj<typeof ModalRow>;

export const Default: Story = {
    args: {
        left: <Icon name={"placeholder"} size={"medium"} />,
        label: "Option",
        right: <Icon name={"placeholder"} size={"medium"} />,
    }
}

export const CheckLeft: Story = {
    args: {
        left: <CheckBox selected={true} />,
        label: "Option",
        right: ""
    }
}

export const UncheckLeft: Story = {
    args: {
        left: <CheckBox selected={false} />,
        label: "Option",
        right: ""
    }
}