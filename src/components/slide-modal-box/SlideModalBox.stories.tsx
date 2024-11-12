import { Meta, StoryObj } from "@storybook/react";
import { SlideModalBox } from "./SlideModalBox";
import {TripSummary} from "../trip-summary/TripSummary";
import {TransportationMethod} from "../transportation-method/TransportationMethod";
import Icon from "../icon/Icon";

const meta: Meta<typeof SlideModalBox> = {
    title: "Components/SlideModalBox",
    component: SlideModalBox,
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
