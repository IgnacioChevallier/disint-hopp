import { Meta, StoryObj } from "@storybook/react";
import { HomeSlider } from "./HomeSlider";
import {ListItem} from "../list-item/ListItem";

const meta: Meta<typeof HomeSlider> = {
    title: "Modals/HomeSlider",
    component: HomeSlider,
    tags: ['autodocs'],
    parameters: {
        layout: "top",
    },
    decorators: [
        (Story) => (
            <div style={{ paddingTop: '50%' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        opened: {
            control: "boolean"
        },
        favouriteRoutes: {
            table: {
                disable: true
            }
        },
        recentRoutes: {
            table: {
                disable: true
            }
        }
    }
};
export default meta;

type Story = StoryObj<typeof HomeSlider>;

export const Open: Story = {
    args: {
        opened: true,
        favouriteRoutes: [<ListItem leadingIcon={"apartment"} text={"Home"}/>, <ListItem leadingIcon={"business center"} text={"Work"}/>],
        recentRoutes: [<ListItem text={"Universidad Austral, Pilar"}/>, <ListItem  text={"JFK International Airport"}/>, <ListItem text={"La Bombonera, Boca"}/> ]
    },
};

export const Closed: Story = {
    args: {
        opened: false,
        favouriteRoutes: [<ListItem leadingIcon={"apartment"} text={"Home"}/>, <ListItem leadingIcon={"business center"} text={"Work"}/>],
        recentRoutes: [<ListItem text={"Universidad Austral, Pilar"}/>, <ListItem  text={"JFK International Airport"}/>, <ListItem text={"La Bombonera, Boca"}/> ]
    },
};
