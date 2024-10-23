import {Radio} from "./Radio";
import {Meta, StoryObj} from "@storybook/react";
import {useArgs} from "@storybook/preview-api";

const meta: Meta<typeof Radio> = {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        checked: {
            control: "boolean",
        }
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

        return <Radio checked={args.checked} onClick={handleClick} name={args.name} value={args.value}/>;
    },
    args: {
        checked: true,
        name: 'radio',
        value: 'some value'
    }
}
