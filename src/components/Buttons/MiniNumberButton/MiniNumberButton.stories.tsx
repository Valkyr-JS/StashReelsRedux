import type { Meta, StoryObj } from "@storybook/react";
import MiniNumberButton from "./MiniNumberButton";
import { PlayCountIcon } from "../../Icons/Icons";

const meta: Meta<typeof MiniNumberButton> = {
  title: "Components/Buttons/MiniNumberButton",
  component: MiniNumberButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MiniNumberButton>;

export const PlayCount: Story = {
  args: {
    Icon: PlayCountIcon,
    onClick: (e) => console.log(e),
    value: 0,
  },
};
