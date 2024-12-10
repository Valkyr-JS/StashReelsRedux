import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import MiniInputButton from "./MiniInputButton";
import { RatingIcon } from "../../Icons/Icons";

const meta: Meta<typeof MiniInputButton> = {
  title: "Components/Buttons/MiniInputButton",
  component: MiniInputButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MiniInputButton>;

export const Rating: Story = {
  args: {
    callback: fn(),
    Icon: RatingIcon,
    inputProps: {
      type: "number",
      min: 0,
      step: 0.1,
      max: 10,
      value: 0,
    },
  },
};
