import { Meta, StoryObj } from '@storybook/react';
import {GoogleLoginButton} from "./GoogleLoginButton";

const meta: Meta<typeof GoogleLoginButton> = {
    title: 'Components/GoogleLoginButton',
    component: GoogleLoginButton,
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof GoogleLoginButton>

export const Default: Story = {
};
