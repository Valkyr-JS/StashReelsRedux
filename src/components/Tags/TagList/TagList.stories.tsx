import type { Meta, StoryObj } from "@storybook/react";
import TagList from "./TagList";

const meta: Meta<typeof TagList> = {
  title: "Components/Tags/TagList",
  component: TagList,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TagList>;

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
