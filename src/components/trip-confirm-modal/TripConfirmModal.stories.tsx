import { Meta, StoryObj } from "@storybook/react";
import { TripConfirmModal } from "./TripConfirmModal";

const meta: Meta<typeof TripConfirmModal> = {
    title: "Modals/TripConfirmModal",
    component: TripConfirmModal,
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

type Story = StoryObj<typeof TripConfirmModal>;

export const Default: Story = {
    args: {
        destination: "Destination",
        arrivalTime: "1:30 hs",
        icons: ["directions walk", "directions bus", "directions bus", "directions walk", "directions bus"]
    }
};
