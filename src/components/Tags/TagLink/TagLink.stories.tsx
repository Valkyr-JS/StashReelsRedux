import type { Meta, StoryObj } from "@storybook/react";
import TagLink from "./TagLink";

const meta: Meta<typeof TagLink> = {
  title: "Components/Tags/TagLink",
  component: TagLink,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TagLink>;

export const Default: Story = {
  args: {
    id: "1",
    name: "4K",
  },
};
