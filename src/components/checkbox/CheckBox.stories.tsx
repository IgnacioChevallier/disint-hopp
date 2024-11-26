import { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from "./CheckBox";
import React, { useState, useEffect } from "react";

const meta: Meta<typeof CheckBox> = {
    title: 'Buttons/CheckBox',
    component: CheckBox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ["small", "medium", "large"]
            },
        },
        selected: {
            control: {
                type: 'boolean',
            },
        }
    }
}
export default meta;

type Story = StoryObj<typeof CheckBox>;

const createCheckBoxStory = (initialSelected: boolean): Story => ({
    args: {
        size: 'small',
        selected: initialSelected,
    },
    render: (args) => {
        const [isSelected, setIsSelected] = useState(args.selected);

        useEffect(() => {
            setIsSelected(args.selected);
        }, [args.selected]);

        return (
            <CheckBox
                onClick={() => {
                    const newSelected = !isSelected;
                    setIsSelected(newSelected);
                    args.selected = newSelected;
                }}
                selected={isSelected}
                size={args.size}
            />
        );
    },
});

export const Default = createCheckBoxStory(false);
export const Selected = createCheckBoxStory(true);
