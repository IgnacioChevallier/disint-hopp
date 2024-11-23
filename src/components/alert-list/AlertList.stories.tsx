import { Meta, StoryObj } from "@storybook/react";
import { AlertList } from "./AlertList";
import {Alert} from "../alert/Alert";

const meta: Meta<typeof AlertList> = {
    title: 'Common/AlertList',
    component: AlertList,
    tags: ['autodocs'],
    parameters: {
        layout: 'top',
    },
};

export default meta;

type Story = StoryObj<typeof AlertList>;

export const Default: Story = {
    args: {
        children: [
            <Alert active={true} link={true} href="https://example.com" text="Lines 123, 434, 843, 945 currently affected by strike" time="6:34 am" icon="bus alert"/>,
            <Alert active={true} link={true} href="https://example.com" text="Another active alert with a link" time="6:24 am" icon="bus alert"/>,
            <Alert active={false} link={false} href="" text="This is an inactive alert without link" time="11:00 am" icon="calendar clock"/>,
            <Alert active={false} link={false} href="" text="Lines 123, 434, 843, 945 currently affected by strike" time="4:11 pm" icon="calendar clock"/>,
        ]
    }
};
