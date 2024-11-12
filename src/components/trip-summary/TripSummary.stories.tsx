import { Meta, StoryObj } from "@storybook/react";
import { TripSummary } from "./TripSummary";
import {TransportationMethod} from "../transportation-method/TransportationMethod";

const meta: Meta<typeof TripSummary> = {
    title: "Components/TripSummary",
    component: TripSummary,
    parameters: {
        layout: "top",
    },
};
export default meta;

type Story = StoryObj<typeof TripSummary>;

export const Default: Story = {
    args: {
        time: "6:30 am",
        children: [
            <TransportationMethod icon={"directions bus"} text={"1234"}/>,
            <TransportationMethod icon={"directions walk"} text={""}/>,
            <TransportationMethod icon={"directions bus"} text={"985"}/>,
            <TransportationMethod icon={"directions bus"} text={"777"}/>,
        ]
    },

    render: (args) => {
        return (
            <TripSummary time={args.time}>
                {args.children}
            </TripSummary>
        )
    },
};
export const SingleStep: Story = {
    args: {
        time: "6:30hrs",
        children: [
            <TransportationMethod icon={"directions bus"} text={"1234"}/>,
        ]
    },

    render: (args) => {
        return (
            <TripSummary time={args.time}>
                {args.children}
            </TripSummary>
        )
    },
};
