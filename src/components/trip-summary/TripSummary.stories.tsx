import { Meta, StoryObj } from "@storybook/react";
import { TripSummary } from "./TripSummary";
import {TransportationMethod} from "../transportation-method/TransportationMethod";

const meta: Meta<typeof TripSummary> = {
    title: "Travel/Sub-Components/TripSummary",
    tags: ['autodocs'],
    component: TripSummary,
    parameters: {
        layout: "top",
    },
};
export default meta;

type Story = StoryObj<typeof TripSummary>;

export const Default: Story = {
    args: {
        time: "6:30hrs",
        children: [
            <TransportationMethod icon={"directions bus"} text={"1234"} time={"5min"}/>,
            <TransportationMethod icon={"directions walk"} text={""} time={"8min"}/>,
            <TransportationMethod icon={"directions bus"} text={"985"} time={"10min"}/>,
            <TransportationMethod icon={"directions bus"} text={"777"} time={"10min"}/>,
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
            <TransportationMethod icon={"directions bus"} text={"1234"} time={"20min"}/>,
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
