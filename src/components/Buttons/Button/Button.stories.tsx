import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
  tags: ["autodocs", "buttons"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Button" },
};

export const Primary: Story = {
  args: {
    children: "Primary button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary button",
    variant: "secondary",
  },
};
