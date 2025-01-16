import type { Meta, StoryObj } from "@storybook/react";
import PerformerCard from "./index";
import performerData from "../../../../mocks/data/performers.json";
import sceneData from "../../../../mocks/data/scenes.json";

/** Get mock performer data from the JSON file and return the required data. */
const getPerformerData = (index: number) => ({
  birthdate: performerData[index].birthdate,
  disambiguation: performerData[index].disambiguation,
  gender: performerData[index].gender as Performer["gender"],
  image_path: performerData[index].image_path,
  name: performerData[index].name,
});

const meta: Meta<typeof PerformerCard> = {
  title: "Components/Performers/PerformerCard",
  component: PerformerCard,
  tags: ["autodocs", "cards", "performers"],
};

export default meta;
type Story = StoryObj<typeof PerformerCard>;

export const GisellePalmerScene: Story = {
  args: {
    ...getPerformerData(2),
    content_context: {
      date: new Date(sceneData[1].date),
      type: "scene",
    },
  },
  tags: ["scenes"],
};

export const JohnnySinsScene: Story = {
  args: {
    ...getPerformerData(3),
    content_context: {
      date: new Date(sceneData[1].date),
      type: "scene",
    },
  },
  tags: ["scenes"],
};

export const MiaMelano: Story = {
  args: {
    ...getPerformerData(1),
    content_context: {
      date: new Date(sceneData[0].date),
      type: "scene",
    },
  },
};

export const MinimalData: Story = {
  args: {
    ...getPerformerData(0),
  },
};
