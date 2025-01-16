import type { Meta, StoryObj } from "@storybook/react";
import PerformerCard from "./index";

const meta: Meta<typeof PerformerCard> = {
  title: "Components/Performers/PerformerCard",
  component: PerformerCard,
  tags: ["autodocs", "card", "performers"],
};

export default meta;
type Story = StoryObj<typeof PerformerCard>;

export const Default: Story = {
  args: {
    name: "Mia Smith",
  },
};
