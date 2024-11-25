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
        time: "8:00am - 8:23am",
        duration: "23min",
        children: [
            <TransportationMethod icon={"directions bus"} text={"1234"} duration={"5min"} color={"blue"}/>,
            <TransportationMethod icon={"directions walk"} text={""} duration={"8min"} color={"gray"}/>,
            <TransportationMethod icon={"directions bus"} text={"985"} duration={"10min"} color={"darkBlue"}/>,
            <TransportationMethod icon={"directions bus"} text={"777"} duration={"10min"} color={"yellow"}/>,
        ]
    },

    render: (args) => {
        return (
            <TripSummary time={args.time} duration={args.duration}>
                {args.children}
            </TripSummary>
        )
    },
};
export const SingleStep: Story = {
    args: {
        time: "6:30hrs",
        children: [
            <TransportationMethod icon={"directions bus"} text={"1234"} duration={"20min"} color={"blue"}/>,
        ]
    },

    render: (args) => {
        return (
            <TripSummary time={args.time} duration={"30min"}>
                {args.children}
            </TripSummary>
        )
    },
};
