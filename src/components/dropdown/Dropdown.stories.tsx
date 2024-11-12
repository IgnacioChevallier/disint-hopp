import { Meta, StoryObj } from "@storybook/react";
import {Dropdown} from "./Dropdown";
import Icon from "../icon/Icon";
import {Toggle} from "../toggle/Toggle";
import React, {useState} from "react";

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

const ToggleExample: React.FC = () => {
    const [selected, setSelected] = useState(false);

    const handleToggleClick = () => {
        setSelected(!selected);
    };

    return <Toggle selected={selected} onClick={handleToggleClick} />;
};

export const WithDifferentIcon: Story = {
    args: {

        overlayProps: {
            rows: [
                {
                    left: <Icon name={"bus alert"} size={"medium"} />,
                    label: "Option",
                    right: <ToggleExample />,
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
            text: "Button"
        }
    }
};
