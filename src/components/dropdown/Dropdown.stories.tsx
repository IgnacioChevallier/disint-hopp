import {Meta, StoryObj} from "@storybook/react";
import {Dropdown} from "./Dropdown";
import Icon from "../icon/Icon";
import {Toggle} from "../toggle/Toggle";
import React, {useState} from "react";
import {iconMap} from "../icon/IconMap";
import {CheckBox} from "../checkbox/CheckBox";

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

const CheckBoxExample: React.FC = () => {
    const [selected, setSelected] = useState(false);

    const handleToggleClick = () => {
        setSelected(!selected);
    };

    return <CheckBox selected={selected} onClick={handleToggleClick}/>;
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
                    right: <CheckBoxExample/>,
                },
                {
                    left: <Icon name={"train"} size={"medium"}/>,
                    label: "Train",
                    right: <CheckBoxExample/>
                },
                {
                    left: <Icon name={"subway"} size={"medium"}/>,
                    label: "Subway",
                    right: <CheckBoxExample/>
                }
            ]
        },
    }
};


