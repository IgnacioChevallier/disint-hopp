import { Meta, StoryObj } from "@storybook/react";
import { HomeSlider } from "./HomeSlider";
import {ListItem} from "../list-item/ListItem";

const meta: Meta<typeof HomeSlider> = {
    title: "Components/HomeSlider",
    component: HomeSlider,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        opened: {
            control: "boolean"
        }
    }
};
export default meta;

type Story = StoryObj<typeof HomeSlider>;

export const Default: Story = {
    args: {
        opened: false,
        favouriteRoutes: [<ListItem leadingIcon={"apartment"} text={"Home"}/>, <ListItem leadingIcon={"business center"} text={"Work"}/>],
        recentRoutes: [<ListItem text={"Universidad Austral, Pilar"}/>, <ListItem  text={"JFK International Airport"}/>, <ListItem text={"La Bombonera, Boca"}/> ]
    },
};
