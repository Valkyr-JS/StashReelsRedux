import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MiniIncrementButton from ".";

const meta: Meta<typeof MiniIncrementButton> = {
  title: "Components/Buttons/MiniIncrementButton",
  component: MiniIncrementButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MiniIncrementButton>;

export const PlayCountButton: Story = {
  args: {
    children: "Play count",
    decrementClickHandler: fn(),
    incrementClickHandler: fn(),
    showValue: true,
    value: 0,
  },
};
