import { Meta, StoryObj } from "@storybook/react";
import {OverlayRow} from "./OverlayRow";
import Icon from "../icon/Icon";
import {CheckBox} from "../checkbox/CheckBox";
import React, {useState} from "react";

const meta: Meta<typeof OverlayRow> = {
    title: 'Common/Sub-Components/OverlayRow',
    component: OverlayRow,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: {
            control: "text"
        },
        left: {
            table: { disable: true }
        },
        right: {
            table: { disable: true }
        }
    },
}

const CheckBoxExample: React.FC = () => {
    const [selected, setSelected] = useState(false);

    const handleToggleClick = () => {
        setSelected(!selected);
    };

    return <CheckBox selected={selected} onClick={handleToggleClick}/>;
};

export default meta;

type Story = StoryObj<typeof OverlayRow>;

export const Default: Story = {
    args: {
        left: <Icon name={"bus"} size={"medium"} />,
        label: "Bus",
        right: <CheckBoxExample/>,
    }
}