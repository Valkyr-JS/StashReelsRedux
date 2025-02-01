import type { Meta, StoryObj } from "@storybook/react";
import data from "@/mocks/data/tags.json";
import TagList from ".";
import { TagLinkProps } from "../TagLink";

/** Return the required arg data from the dummy tag dataset. */
const getArgsFromData = (id: string) => {
  const t = data.find((d) => d.id === id);

  return {
    id: t?.id,
    name: t?.name,
  } as TagLinkProps;
};

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
      getArgsFromData("1"),
      { ...getArgsFromData("2"), disabled: true },
      getArgsFromData("3"),
      getArgsFromData("4"),
      getArgsFromData("5"),
    ],
  },
};
