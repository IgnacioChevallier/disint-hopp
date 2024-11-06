import { Meta, StoryObj } from "@storybook/react";
import {Dropdown} from "./Dropdown";
import Icon from "../icon/Icon";

const meta: Meta<typeof Dropdown> = {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        overlayProps: {
            rows: [
                {
                    left: <Icon name={"placeholder"} size={"medium"} />,
                    label: "Option",
                    right: <Icon name={"placeholder"} size={"medium"} />,
                },
                {
                    left: <Icon name={"placeholder"} size={"medium"} />,
                    label: "Option",
                    right: <Icon name={"placeholder"} size={"medium"} />,
                },
                {
                    left: <Icon name={"placeholder"} size={"medium"} />,
                    label: "Option",
                    right: <Icon name={"placeholder"} size={"medium"} />,
                }
            ]
        },
        buttonProps: {
            text: "Open"
        }
    }
};