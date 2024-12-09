import type { Meta, StoryObj } from "@storybook/react";
import MinimalButton from "./MinimalButton";
import { FavoriteIcon, PlayCountIcon } from "../../Icons/Icons";

const meta: Meta<typeof MinimalButton> = {
  title: "Components/Buttons/MinimalButton",
  component: MinimalButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MinimalButton>;

export const PlayCount: Story = {
  args: {
    Icon: PlayCountIcon,
    onClick: (e) => console.log(e),
    state: 0,
  },
};

export const Favorite: Story = {
  args: {
    Icon: () => <FavoriteIcon isFavorite />,
    IconOff: FavoriteIcon,
    onClick: (e) => console.log(e),
    state: false,
  },
};
