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
                <TransportationMethod icon={"directions bus"} text={"123"}/>
                <TransportationMethod icon={"directions bus"} text={"321"}/>
                <TransportationMethod icon={"directions bus"} text={"789"}/>
                <TransportationMethod icon={"directions bus"} text={"1000"}/>
            </TripSummary>,
            <TripSummary time={"2:00hrs"}>
                <TransportationMethod icon={"directions bus"} text={"678"}/>
                <TransportationMethod icon={"directions bus"} text={"123"}/>
                <TransportationMethod icon={"directions bus"} text={"900"}/>
            </TripSummary>,
            <TripSummary time={"3:00hrs"}>
                <TransportationMethod icon={"directions bus"} text={"555"}/>
                <TransportationMethod icon={"directions walk"} text={""}/>
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
