import { Meta, StoryObj } from "@storybook/react";
import { TripSummaryList } from "./TripSummaryList";
import {TripSummary} from "../trip-summary/TripSummary";
import {TransportationMethod} from "../transportation-method/TransportationMethod";

const meta: Meta<typeof TripSummaryList> = {
    title: "Travel/TripSummaryList",
    component: TripSummaryList,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof TripSummaryList>;

export const Default: Story = {
    args: {
        children: [
            <TripSummary time={"2:30hrs"}>
                <TransportationMethod icon={"directions bus"} text={"123"} time={"10min"}/>
                <TransportationMethod icon={"directions bus"} text={"321"} time={"10min"}/>
                <TransportationMethod icon={"directions bus"} text={"789"} time={"10min"}/>
                <TransportationMethod icon={"directions bus"} text={"1000"} time={"9min"}/>
            </TripSummary>,
            <TripSummary time={"2:00hrs"}>
                <TransportationMethod icon={"directions bus"} text={"678"} time={"6min"}/>
                <TransportationMethod icon={"directions bus"} text={"123"} time={"6min"}/>
                <TransportationMethod icon={"directions bus"} text={"900"} time={"6min"}/>
            </TripSummary>,
            <TripSummary time={"3:00hrs"}>
                <TransportationMethod icon={"directions bus"} text={"555"} time={"5min"}/>
                <TransportationMethod icon={"directions walk"} text={""} time={"3min"}/>
            </TripSummary>
        ]
    },

    render: (args) => {
        return (
            <TripSummaryList>
                {args.children}
            </TripSummaryList>
        )
    },
};
