import { Meta, StoryObj } from "@storybook/react";
import { DestinationPreview } from "./DestinationPreview";

const meta: Meta<typeof DestinationPreview> = {
    title: "Travel/DestinationPreview",
    component: DestinationPreview,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof DestinationPreview>;

export const Default: Story = {
    args: {
        destination: "Destination",
        finalStop: "Final Stop"
    }
};
