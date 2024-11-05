import {Modal} from "./Modal";
import {Meta, StoryObj} from "@storybook/react";
import {TextInput} from "../text-input/TextInput";
import {Button} from "../button/Button";
import {useState} from "react";

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "danger", "gray"]
        },
    },
    args: {
        onConfirm: () => alert("button clicked!"),
    },
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        title: 'Save route as',
        color: 'primary',
        children: (
            <TextInput placeholder="Enter route name"/>
        )
    },
    render: (args) => {
        const [open, setOpen] = useState(false);
        return (
            <>
                <Button text="Open" onClick={() => setOpen(true)}/>
                <Modal {...args} onClose={() => setOpen(false)} onConfirm={args.onConfirm} open={open} />
            </>
        )
    }

};
