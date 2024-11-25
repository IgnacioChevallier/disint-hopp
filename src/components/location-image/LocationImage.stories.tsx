import {Meta, StoryObj} from "@storybook/react";
import {LocationImage} from "./LocationImage";

const meta: Meta<typeof LocationImage> = {
    title: 'Common/LocationImage',
    component: LocationImage,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        src: {
            control: "text"
        },
        alt: {
            control: "text"
        },
        size: {
            control: "select",
            options: ["small", "medium"]
        }
    }
}

export default meta;

type Story = StoryObj<typeof LocationImage>;

export const Default: Story = {
    args: {
        src: "https://www.usnews.com/cmsmedia/5c/38cc5da3a6a0f690dd7f46438ae170/Above-Cobb-Gate.jpg",
        alt: "University of Chicago",
        size: "small"
    }
}

export const Small: Story = {
    args: {
        src: "https://www.usnews.com/cmsmedia/5c/38cc5da3a6a0f690dd7f46438ae170/Above-Cobb-Gate.jpg",
        alt: "University of Chicago",
        size: "small"
    }
}

export const Medium: Story = {
    args: {
        src: "https://www.usnews.com/cmsmedia/5c/38cc5da3a6a0f690dd7f46438ae170/Above-Cobb-Gate.jpg",
        alt: "University of Chicago",
        size: "medium"
    }
}