import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import {SidebarElement} from "../sidebar-element/SidebarElement";
import {useState} from "react";

const meta: Meta<typeof Sidebar> = {
    title: "Components/Sidebar",
    component: Sidebar,
    parameters: {
        layout: "fullscreen",
    },
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
    render: () => {
        const [selectedElement, setSelectedElement] = useState<number>(0);
        return (
            <Sidebar>
                <SidebarElement selected={selectedElement === 0} icon={"search"} text={"Search"} onClick={() => setSelectedElement(0)}/>
                <SidebarElement selected={selectedElement === 1} icon={"groups"} text={"Family Group"} onClick={() => setSelectedElement(1)}/>
                <SidebarElement selected={selectedElement === 2} icon={"history"} text={"Trip History"} onClick={() => setSelectedElement(2)}/>
                <SidebarElement selected={selectedElement === 3} icon={"bus alert"} text={"Alerts"} onClick={() => setSelectedElement(3)}/>
                <SidebarElement selected={selectedElement === 4} icon={"account circle"} text={"Account"} onClick={() => setSelectedElement(4)}/>
            </Sidebar>
        )
    },
};
