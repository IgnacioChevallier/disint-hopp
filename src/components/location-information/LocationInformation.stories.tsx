import {Meta, StoryObj} from "@storybook/react";
import {LocationInformation} from "./LocationInformation";

const meta: Meta<typeof LocationInformation> = {
    title: 'Modals/LocationInformation',
    component: LocationInformation,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        name: {
            control: "text"
        },
        images: {
            table: {
                disable: true
            }
        },
        positionAtBottom: {
            table: {
                disable: true
            }
        }
    },
    decorators: [
        (Story) => (
            <div className={"w-[400px]"}>
                <Story />
            </div>
        ),
    ],
}

export default meta;

type Story = StoryObj<typeof LocationInformation>;

export const Default: Story = {
    args: {
        name: "University of Chicago",
        images: [
            {
                src: "https://www.usnews.com/cmsmedia/5c/38cc5da3a6a0f690dd7f46438ae170/Above-Cobb-Gate.jpg",
                alt: "University of Chicago",
                size: "small"
            },
            {
                src: "https://www.edvisehub.com/wp-content/uploads/2022/11/UChicagoUpdate_0912.jpg",
                alt: "University of Chicago",
                size: "small"
            },
            {
                src: "https://www.chicagomag.com/wp-content/archive/images/2011/0311/C201103-U-of-C-campus.jpg",
                alt: "University of Chicago",
                size: "small"
            }
        ],
    }
}