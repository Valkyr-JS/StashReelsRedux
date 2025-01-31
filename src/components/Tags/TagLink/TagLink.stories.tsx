import type { Meta, StoryObj } from "@storybook/react";
import data from "@/mocks/data/tags.json";
import TagLink from ".";

/** Return the required arg data from the dummy tag dataset. */
const getArgsFromData = (id: string) => {
  const t = data.find((d) => d.id === id);

  return {
    id: t?.id,
    name: t?.name,
  };
};

const meta: Meta<typeof TagLink> = {
  title: "Components/Tags/TagLink",
  component: TagLink,
  tags: ["autodocs", "buttons", "tags"],
};

export default meta;
type Story = StoryObj<typeof TagLink>;

export const TagA: Story = {
  args: getArgsFromData("3"),
};

export const TagB: Story = {
  args: getArgsFromData("4"),
};

export const Disabled: Story = {
  args: { ...getArgsFromData("5"), disabled: true },
};
