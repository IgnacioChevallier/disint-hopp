import { Meta, StoryObj } from '@storybook/react';
import {GoogleLoginButton} from "./GoogleLoginButton";

const meta: Meta<typeof GoogleLoginButton> = {
    title: 'Common/GoogleLoginButton',
    component: GoogleLoginButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};
export default meta;

type Story = StoryObj<typeof GoogleLoginButton>

export const Default: Story = {
};
