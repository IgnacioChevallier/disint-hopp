import { Meta, StoryObj } from "@storybook/react";
import { TripConfirmModal } from "./TripConfirmModal";

const meta: Meta<typeof TripConfirmModal> = {
    title: "Modals/TripConfirmModal",
    component: TripConfirmModal,
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
        icons: {
            table: {
                disable: true
            }
        },
        onBackClick: {
            table: {
                disable: true
            }
        },
        onStartClick: {
            table: {
                disable: true
            }
        }
    }
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
