import { SidebarElement } from "./SidebarElement";
import { Meta, StoryObj } from "@storybook/react";
import { iconMap } from "../icon/IconMap";

const meta: Meta<typeof SidebarElement> = {
    title: 'Common/Sub-Components/SidebarElement',
    component: SidebarElement,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        selected: {
            control: "boolean"
        },
        icon: {
            control: "select",
            options: Array.from(iconMap.keys())
        },
        text: {
            control: "text"
        },
        onClick: {
            table: { disable: true }
        }
    }
};

export default meta;

type Story = StoryObj<typeof SidebarElement>

export const Default: Story = {
    args: {
        selected: true,
        text: 'Search',
        icon: 'search',
    },
    render: (args) => (
        <SidebarElement
            selected={args.selected}
            text={args.text}
            icon={args.icon}
            onClick={() => {alert("Clicked!")}}
        />
    )
};
