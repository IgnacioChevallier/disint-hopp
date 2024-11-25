import {Radio} from "./Radio";
import {Meta, StoryObj} from "@storybook/react";
import {useArgs} from "@storybook/preview-api";

const meta: Meta<typeof Radio> = {
    title: 'Buttons/Radio',
    component: Radio,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        checked: {
            control: "boolean",
        },
        onClick: {
            table: {
                disable: true
            }
        },
    }
}

export default meta;

type Story = StoryObj<typeof Radio>

export const Default: Story = {
    render: (args) => {
        const [_, updateArgs] = useArgs();
        const handleClick = () => {
            updateArgs({ checked: !args.checked });
        };

        return (
            <Radio
                checked={args.checked}
                onClick={handleClick}
                name={args.name}
                value={args.value}
            />
        );
    },
    args: {
        checked: false,
        name: 'radio',
        value: 'some value',
    },
};
