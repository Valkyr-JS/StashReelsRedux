import type { Meta, StoryObj } from "@storybook/react";
import TagBoard from "./TagBoard";

const meta: Meta<typeof TagBoard> = {
  title: "Components/Tags/TagBoard",
  component: TagBoard,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TagBoard>;

export const Default: Story = {
  args: {
    tags: [
      { id: "1", name: "Tag A" },
      { id: "2", name: "Tag Beta" },
      { id: "3", name: "This is the next tag" },
      { id: "4", name: "T" },
      { id: "5", name: "Taggy McTagFace" },
      { id: "6", name: "Tagbert" },
      { id: "7", name: "Tag Q" },
    ],
  },
};
