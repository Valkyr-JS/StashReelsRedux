import type { Meta, StoryObj } from "@storybook/react";
import SceneInfoPanel from "./SceneInfoPanel";

const defaultArgs = {
  play_count: 12,
  studio: {
    image_path:
      import.meta.env.VITE_STASH_URI + "/studio/229/image?t=1696765638",
    name: "anna.ralphs (OnlyFans)",
  },
  title: "Just some fun before we go to bed",
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
    play_count: undefined,
    studio: {
      image_path: undefined,
      name: "Mia Melano",
    },
    title: undefined,
  },
};
