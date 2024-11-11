import {Meta, StoryObj} from "@storybook/react";
import {CheckBox} from "./CheckBox";
import {useState} from "react";

const meta: Meta<typeof CheckBox> = {
    title: 'Components/CheckBox',
    component: CheckBox,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        selected: {
            control: "boolean",
        }
    },
}
export default meta;

type Story = StoryObj<typeof CheckBox>;
export const Default: Story = {
    render: () => {
        const [clicked, setClicked] = useState(false);
        return (<CheckBox onClick={() => setClicked(!clicked)} selected={clicked} />)
    },
};

export const Selected: Story = {
    render: () => {
        const [clicked, setClicked] = useState(true);
        return (<CheckBox onClick={() => setClicked(!clicked)} selected={clicked} />)
    },
};