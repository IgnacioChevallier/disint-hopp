import { Meta, StoryObj } from "@storybook/react";
import SlideModalTripMenu from "./SlideModalTripMenu";

const meta: Meta<typeof SlideModalTripMenu> = {
    title: "Modals/SlideModalTripMenu",
    component: SlideModalTripMenu,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <div className={"w-[400px]"}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        arrivalTime: { control: "text" },
        distance: { control: "text" },
        time: { control: "text" },
        open: { control: "boolean" },
    },
};
export default meta;

type Story = StoryObj<typeof SlideModalTripMenu>;

export const Closed: Story = {
    args: {
        arrivalTime: "5:24 pm",
        distance: "30 km",
        time: "25 min",
        open: false,
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
