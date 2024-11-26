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
            <ListItem text="List Item 1" leadingIcon="bus alert" trailingIcon="location" additionalText="Additional Text"/>,
            <ListItem text="List Item 2" leadingIcon="bus alert" trailingIcon="location" additionalText="Additional Text"/>,
            <ListItem text="List Item 3" leadingIcon="bus alert" trailingIcon="location" additionalText="Additional Text"/>,
        ],
        endLine: false,
        dividingLines: false,
        firstLine: false
    }
};
