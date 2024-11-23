import { Meta, StoryObj } from "@storybook/react";
import SlideModalTripMenu from "./SlideModalTripMenu";

const meta: Meta<typeof SlideModalTripMenu> = {
    title: "Modals/SlideModalTripMenu",
    component: SlideModalTripMenu,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        arrivalTime: { control: "text" },
        distance: { control: "text" },
        time: { control: "text" },
    },
};
export default meta;

type Story = StoryObj<typeof SlideModalTripMenu>;

export const Closed: Story = {
    args: {
        arrivalTime: "5:24 pm",
        distance: "30 km",
        time: "25 min",
    },
    render: (args) => {
        return <SlideModalTripMenu {...args} />;
    },
};

export const Opened: Story = {
    args: {
        arrivalTime: "5:24 pm",
        distance: "30 km",
        time: "25 min",
        open: true,
    },
    render: (args) => {
        return <SlideModalTripMenu {...args} />;
    },
};
