import { Meta, StoryObj } from "@storybook/react";
import { DestinationPreview } from "./DestinationPreview";

const meta: Meta<typeof DestinationPreview> = {
    title: "Components/DestinationPreview",
    component: DestinationPreview,
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
