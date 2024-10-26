import {SidebarElement} from "./SidebarElement";
import {Meta, StoryObj} from "@storybook/react";
import Icon from "../icon/Icon";

const meta: Meta<typeof SidebarElement> = {
    title: 'Components/SidebarElement',
    component: SidebarElement,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        selected: {
            control: "boolean",
        },
        text: {
            control: "text"
        }
    }
}

export default meta;

type Story = StoryObj<typeof SidebarElement>

export const Selected: Story = {
    args: {
        selected: true,
        text: 'Dashboard',
        icon: <Icon name={"placeholder"} size={"small"}/>
    }
}

export const NotSelected: Story = {
    args: {
        selected: false,
        text: 'Dashboard',
        icon: <Icon name={"placeholder"} size={"small"}/>
    }
}
