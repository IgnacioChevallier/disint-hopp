import {Meta, StoryObj} from "@storybook/react";
import {Overlay} from "./Overlay";
import Icon from "../icon/Icon";
import {CheckBox} from "../checkbox/CheckBox";

const meta: Meta<typeof Overlay> = {
    title: 'Common/Overlay',
    component: Overlay,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const Default: Story = {
    args: {
        rows: [
            {
                left: <Icon name={"placeholder"} size={"medium"}/>,
                label: "Option 1",
                right: <Icon name={"placeholder"} size={"medium"}/>,
            },
            {
                left: <Icon name={"placeholder"} size={"medium"}/>,
                label: "Option 2",
                right: <Icon name={"placeholder"} size={"medium"}/>,
            },
            {
                left: <Icon name={"placeholder"} size={"medium"}/>,
                label: "Option 3",
                right: <Icon name={"placeholder"} size={"medium"}/>,
            }
        ]
    }
};

export const CheckOverlay: Story = {
    args: {
        rows: [
            {
                left: <CheckBox selected={true} size={"md"}/>,
                label: "Option 1",
                right: ""
            },
            {
                left: <CheckBox selected={true} size={"md"}/>,
                label: "Option 2",
                right: ""
            },
            {
                left: <CheckBox selected={true} size={"md"}/>,
                label: "Option 3",
                right: ""
            }
        ]
    }
}

export const UncheckOverlay: Story = {
    args: {
        rows: [
            {
                left: <CheckBox selected={false} size={"md"}/>,
                label: "Option 1",
                right: ""
            },
            {
                left: <CheckBox selected={false} size={"md"}/>,
                label: "Option 2",
                right: ""
            },
            {
                left: <CheckBox selected={false} size={"md"}/>,
                label: "Option 3",
                right: ""
            }
        ]
    }
}