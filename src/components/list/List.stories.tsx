import {Meta, StoryObj} from "@storybook/react";
import {List} from "./List";
import {ListItem} from "../list-item/ListItem";

const meta: Meta<typeof List> = {
    title: 'Common/List',
    component: List,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        children: {
            table: {disable: true}
        },
        onItemClick: {
            table: {disable: true}
        },
        endLine: {
            control: "boolean"
        },
        dividingLines: {
            control: "boolean"
        },
        firstLine: {
            control: "boolean"
        }
    },
    decorators: [
        (Story) => (
            <div className={'w-[400px]'}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
    args: {
        children: [
            <ListItem text="Share progress of the trip" leadingIcon="share" trailingIcon="" additionalText=""/>,
            <ListItem text="Route directions" leadingIcon="alt routes" trailingIcon="" additionalText=""/>,
            <ListItem text="Add stop to the trip" leadingIcon="add stop" trailingIcon="" additionalText=""/>,
        ],
        endLine: true,
        dividingLines: true,
        firstLine: true
    }
};
