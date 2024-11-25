import {Meta, StoryObj} from "@storybook/react";
import {LocationImageCarousel} from "./LocationImageCarousel";

const meta: Meta<typeof LocationImageCarousel> = {
    title: 'Modals/LocationImageCarousel',
    component: LocationImageCarousel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
}

export default meta;

type Story = StoryObj<typeof LocationImageCarousel>

export const Default: Story = {
    args: {
        images: [
            {
                src: "https://www.usnews.com/cmsmedia/5c/38cc5da3a6a0f690dd7f46438ae170/Above-Cobb-Gate.jpg",
                alt: "University of Chicago",
                size: "medium"
            },
            {
                src: "https://www.edvisehub.com/wp-content/uploads/2022/11/UChicagoUpdate_0912.jpg",
                alt: "University of Chicago",
                size: "medium"
            },
            {
                src: "https://www.chicagomag.com/wp-content/archive/images/2011/0311/C201103-U-of-C-campus.jpg",
                alt: "University of Chicago",
                size: "medium"
            }
        ],
        index: 0
    }
}
