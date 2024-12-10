import type { Meta, StoryObj } from "@storybook/react";
import SceneInfoPanel from "./SceneInfoPanel";
import { MOCK_SCENE_PLAY_RECORD } from "../../../mocks/constants";

const defaultArgs = {
  id: "179",
  o_count: 3,
  play_count: MOCK_SCENE_PLAY_RECORD,
  studio: {
    image_path: import.meta.env.VITE_STASH_URI + "/studio/4/image?t=1733167654",
    name: "Ass Parade",
  },
  title: "Mia Malkova's Perfect Ass",
};

const meta: Meta<typeof SceneInfoPanel> = {
  title: "Components/Scene/InfoPanel",
  component: SceneInfoPanel,
  tags: ["autodocs"],
  args: defaultArgs,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SceneInfoPanel>;

export const Default: Story = {};

export const MinimalData: Story = {
  args: {
    o_count: undefined,
    play_count: undefined,
    studio: {
      image_path: undefined,
      name: "Mia Melano",
    },
    title: undefined,
  },
};
