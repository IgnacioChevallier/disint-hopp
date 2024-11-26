import {Meta, StoryObj} from "@storybook/react";
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
        buttonProps: {
            table: {disable: true}
        },
        overlayProps: {
            table: {disable: true}
        },
        open: {
            table: {disable: true}
        },
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
        color: "#FFFFFF",
        buttonProps: {
            text: "Open"
        },
        overlayProps: {
            rows: [
                {
                    label: "Bus",
                },
                {
                    label: "Train",
                },
                {
                    label: "Subway",
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

    return <Toggle selected={selected} onClick={handleToggleClick}/>;
};

export const WithLeftIcon: Story = {
    args: {
        overlayAlignment: "left",
        openIcon: "arrow down",
        closeIcon: "arrow up",
        color: "#FFFFFF",
        buttonProps: {
            text: "Open"
        },
        overlayProps: {
            rows: [
                {
                    left: <Icon name={"bus"} size={"medium"}/>,
                    label: "Bus",
                },
                {
                    left: <Icon name={"train"} size={"medium"}/>,
                    label: "Train",
                },
                {
                    left: <Icon name={"subway"} size={"medium"}/>,
                    label: "Subway",
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
        color: "#FFFFFF",
        buttonProps: {
            text: "Open"
        },
        overlayProps: {
            rows: [
                {
                    left: <Icon name={"bus"} size={"medium"}/>,
                    label: "Bus",
                    right: <ToggleExample/>,
                },
                {
                    left: <Icon name={"train"} size={"medium"}/>,
                    label: "Train",
                    right: <ToggleExample/>
                },
                {
                    left: <Icon name={"subway"} size={"medium"}/>,
                    label: "Subway",
                    right: <ToggleExample/>
                }
            ]
        },
    }
};
export const FilterButton: Story = {
    args: {
        buttonProps: {
            leadingIcon: "filter",
            text: "Filter",
            color: "primary",
            variant: "outlined",
            trailingIcon: "arrow down",
            rounded: "full",
            size: "medium",
            disableHover: true,
        },
        overlayProps: {
            rows: [
                {
                    left: <Icon name={"bus"} size={"medium"}/>,
                    label: "Bus",
                    right: <ToggleExample/>,
                },
                {
                    left: <Icon name={"train"} size={"medium"}/>,
                    label: "Train",
                    right: <ToggleExample/>
                },
                {
                    left: <Icon name={"subway"} size={"medium"}/>,
                    label: "Subway",
                    right: <ToggleExample/>
                }
            ]
        },
    }
};


