import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MiniValueButton from "./MiniValueButton";
import { PlayCountIcon } from "../../Icons/Icons";

const meta: Meta<typeof MiniValueButton> = {
  title: "Components/Buttons/MiniValueButton",
  component: MiniValueButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MiniValueButton>;

export const PlayCount: Story = {
  args: {
    Icon: PlayCountIcon,
    onClick: fn(),
    value: 0,
  },
};
