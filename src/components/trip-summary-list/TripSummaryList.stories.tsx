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
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    },
};
export default meta;

type Story = StoryObj<typeof TripSummaryList>;

export const Default: Story = {
    render: (args) => {
        return (
            <TripSummaryList>
                <TripSummary time={"2:30pm - 3:11pm"} duration={"41min"}>
                    <TransportationMethod icon={"directions bus"} text={"123"} duration={"15min"} color={"blue"}/>
                    <TransportationMethod icon={"directions bus"} text={"321"} duration={"7min"} color={"red"}/>
                    <TransportationMethod icon={"directions bus"} text={"789"} duration={"10min"} color={"darkBlue"}/>
                    <TransportationMethod icon={"directions bus"} text={"1000"} duration={"9min"} color={"black"}/>
                </TripSummary>
                <TripSummary time={"2:27pm - 3:00pm"} duration={"33min"}>
                    <TransportationMethod icon={"directions bus"} text={"678"} duration={"10min"} color={"yellow"}/>
                    <TransportationMethod icon={"directions bus"} text={"123"} duration={"15min"} color={"darkBlue"}/>
                    <TransportationMethod icon={"directions bus"} text={"900"} duration={"8min"} color={"blue"}/>
                </TripSummary>
                <TripSummary time={"2:45pm - 3:30pm"} duration={"30min"}>
                    <TransportationMethod icon={"directions bus"} text={"555"} duration={"30min"} color={"blue"}/>
                    <TransportationMethod icon={"directions walk"} text={""} duration={"15min"} color={"gray"}/>
                </TripSummary>
            </TripSummaryList>
        )
    },
};
