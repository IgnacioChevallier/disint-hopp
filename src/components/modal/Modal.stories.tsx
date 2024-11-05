import { Meta, StoryObj } from "@storybook/react";
import {Modal} from "./Modal";
import Icon from "../icon/Icon";

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        rows: [
            {
                left: <Icon name={"placeholder"} size={"medium"} />,
                label: "Option 1",
                right: <Icon name={"placeholder"} size={"medium"} />,
            },
            {
                left: <Icon name={"placeholder"} size={"medium"} />,
                label: "Option 2",
                right: <Icon name={"placeholder"} size={"medium"} />,
            },
            {
                left: <Icon name={"placeholder"} size={"medium"} />,
                label: "Option 3",
                right: <Icon name={"placeholder"} size={"medium"} />,
            }
        ]
    }
};
