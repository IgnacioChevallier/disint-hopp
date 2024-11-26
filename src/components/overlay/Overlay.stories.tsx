import {Meta, StoryObj} from "@storybook/react";
import {Overlay} from "./Overlay";
import Icon from "../icon/Icon";
import {CheckBox} from "../checkbox/CheckBox";
import React, {useState} from "react";
import {Toggle} from "../toggle/Toggle";
import {Radio} from "../radio/Radio";

const meta: Meta<typeof Overlay> = {
    title: 'Common/Sub-Components/Overlay',
    component: Overlay,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        rows: {
            table: {disable: true}
        }
    }
};

export default meta;

type Story = StoryObj<typeof Overlay>;

const ToggleExample: React.FC = () => {
    const [selected, setSelected] = useState(false);

    const handleToggleClick = () => {
        setSelected(!selected);
    };

    return <Toggle selected={selected} onClick={handleToggleClick}/>;
};

const CheckBoxExample: React.FC = () => {
    const [selected, setSelected] = useState(false);

    const handleToggleClick = () => {
        setSelected(!selected);
    };

    return <CheckBox selected={selected} onClick={handleToggleClick}/>;
};

const RadioButtonExample: React.FC = () => {
    const [selected, setSelected] = useState(false);

    const handleToggleClick = () => {
        setSelected(!selected);
    };

    return <Radio checked={selected} onClick={handleToggleClick}/>;
}

export const AlertFilter: Story = {
    args: {
        rows: [
            {
                label: "All",
                right: <ToggleExample/>,
            },
            {
                label: "Favorites",
                right: <CheckBoxExample/>,
            },
            {
                label: "Ongoing",
                right: <CheckBoxExample/>,
            }
        ]
    }
};

export const TripHistoryFilter: Story = {
    args: {
        rows: [
            {
                label: "Today",
                right: <RadioButtonExample/>
            },
            {
                label: "This Week",
                right: <RadioButtonExample/>
            },
            {
                label: "This Month",
                right: <RadioButtonExample/>
            },
            {
                label: "This Year",
                right: <RadioButtonExample/>
            }
        ]
    }
}

export const RouteFilter: Story = {
    args: {
        rows: [
            {
                label: "Bus",
                right: <CheckBoxExample/>
            },
            {
                label: "Train",
                right: <CheckBoxExample/>
            },
            {
                label: "Subway",
                right: <CheckBoxExample/>
            }
        ]
    }
}