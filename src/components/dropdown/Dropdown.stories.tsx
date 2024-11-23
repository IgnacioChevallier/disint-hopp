import { Meta, StoryObj } from "@storybook/react";
import {Dropdown} from "./Dropdown";
import Icon from "../icon/Icon";
import {Toggle} from "../toggle/Toggle";
import React, {useState} from "react";
import {iconMap} from "../icon/IconMap";

const meta: Meta<typeof Dropdown> = {
    title: 'Common/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        overlayAlignment: {
            control: "radio",
            options: ['left', 'right']
        },
        openIcon: {
            control: "select",
            options: Array.from(iconMap.keys())
        },
        closeIcon: {
            control: "select",
            options: Array.from(iconMap.keys())
        }
    }
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
    args: {
        overlayAlignment: "left",
        openIcon: "arrow down",
        closeIcon: "arrow up",
        buttonProps: {
            text: "Open"
        },
        overlayProps: {
            rows: [
                {
                    label: "Option 1",
                },
                {
                    label: "Option 2",
                },
                {
                    label: "Option 3",
                }
            ]
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

export const WithLeftIcon: Story = {
    args: {
        overlayAlignment: "left",
        openIcon: "arrow down",
        closeIcon: "arrow up",
        buttonProps: {
            text: "Open"
        },
        overlayProps: {
            rows: [
                {
                    left: <Icon name={"bus alert"} size={"medium"} />,
                    label: "Option 1",
                },
                {
                    left: <Icon name={"location"} size={"medium"} />,
                    label: "Option 2",
                },
                {
                    left: <Icon name={"search"} size={"medium"} />,
                    label: "Option 3",
                }
            ]
        },
    }
};

export const WithToggle: Story = {
    args: {
        overlayAlignment: "right",
        openIcon: "arrow down",
        closeIcon: "arrow up",
        buttonProps: {
            text: "Open"
        },
        overlayProps: {
            rows: [
                {
                    left: <Icon name={"bus alert"} size={"medium"} />,
                    label: "Option 1",
                    right: <ToggleExample />,
                },
                {
                    left: <Icon name={"location"} size={"medium"} />,
                    label: "Option 2",
                    right: <ToggleExample />
                },
                {
                    left: <Icon name={"search"} size={"medium"} />,
                    label: "Option 3",
                    right: <ToggleExample />
                }
            ]
        },
    }
};

