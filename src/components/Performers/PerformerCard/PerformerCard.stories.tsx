import type { Meta, StoryObj } from "@storybook/react";
import PerformerCard from "./index";
import performerData from "../../../../mocks/data/performers.json";

const meta: Meta<typeof PerformerCard> = {
  title: "Components/Performers/PerformerCard",
  component: PerformerCard,
  tags: ["autodocs", "card", "performers"],
};

export default meta;
type Story = StoryObj<typeof PerformerCard>;

export const GisellePalmer: Story = {
  args: {
    ...performerData[1],
    gender: performerData[1].gender as Performer["gender"],
  },
};

export const JohnnySins: Story = {
  args: {
    ...performerData[2],
    gender: performerData[2].gender as Performer["gender"],
  },
};

export const MiaMelano: Story = {
  args: {
    ...performerData[0],
    gender: performerData[0].gender as Performer["gender"],
  },
};

export const MinimalData: Story = {};
