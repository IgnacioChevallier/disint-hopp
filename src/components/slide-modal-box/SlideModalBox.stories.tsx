import { Meta, StoryObj } from "@storybook/react";
import { SlideModalBox } from "./SlideModalBox";

const meta: Meta<typeof SlideModalBox> = {
    title: "Modals/Sub-Components/SlideModalBox",
    component: SlideModalBox,
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
        children: {
            table: {
                disable: true
            }
        }
    }
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
