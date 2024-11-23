import {Meta, StoryObj} from "@storybook/react";
import {List} from "./List";

const meta: Meta<typeof List> = {
    title: 'Components/List',
    component: List,
    parameters: {
        layout: 'top',
    },
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
    args: {
        items: [
            {
                text: 'List Item 1',
            },
            {
                text: 'List Item 2',
            },
            {
                text: 'List Item 3',
            }
        ]
    }
};
