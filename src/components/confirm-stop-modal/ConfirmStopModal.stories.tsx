import { Meta, StoryObj } from "@storybook/react";
import { ConfirmStopModal } from "./ConfirmStopModal";

const meta: Meta<typeof ConfirmStopModal> = {
    title: "Modals/ConfirmStopModal",
    component: ConfirmStopModal,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof ConfirmStopModal>;

export const Default: Story = {
    args:{}
};
