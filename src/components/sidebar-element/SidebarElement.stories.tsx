import {SidebarElement} from "./SidebarElement";
import {Meta, StoryObj} from "@storybook/react";
import Icon from "../icon/Icon";
import {iconMap} from "../icon/IconMap";
import {useState} from "react";

const meta: Meta<typeof SidebarElement> = {
    title: 'Components/SidebarElement',
    component: SidebarElement,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        icon: {
            control: "select",
            options: Array.from(iconMap.keys())
        },
        text: {
            control: "text"
        }
    }
}

export default meta;

type Story = StoryObj<typeof SidebarElement>

export const Default: Story = {
    args: {
        selected: true,
        text: 'Dashboard',
        icon: "placeholder",
    },
    render: (args) => {
        const [isSelected, setIsSelected] = useState<boolean>(args.selected)
        return(
            <SidebarElement selected={isSelected} text={args.text} icon={args.icon} onClick={() => setIsSelected(!isSelected)}/>
        )
    }
}
