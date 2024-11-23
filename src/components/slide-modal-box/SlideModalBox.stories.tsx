import { Meta, StoryObj } from "@storybook/react";
import { SlideModalBox } from "./SlideModalBox";

const meta: Meta<typeof SlideModalBox> = {
    title: "Modals/Sub-Components/SlideModalBox",
    component: SlideModalBox,
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
