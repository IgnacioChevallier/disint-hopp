import { Meta, StoryObj } from "@storybook/react";
import { SlideModalBox } from "./SlideModalBox";

const meta: Meta<typeof SlideModalBox> = {
    title: "Modals/SlideModalBox",
    component: SlideModalBox,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof SlideModalBox>;

export const Default: Story = {
    args: {
        children: [
        ]
    },

    render: (args) => {
        return (
            <SlideModalBox>
                {args.children}
            </SlideModalBox>
        )
    },
};
