import type { Meta, StoryObj } from "@storybook/react";
import SceneInfoPanel from "./SceneInfoPanel";

const defaultArgs = {
  studio: {
    image_path: "http://192.168.0.20:9999/studio/233/image?t=1696765512",
    name: "Mia Melano",
  },
  title: "Birthday",
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
    studio: {
      image_path: undefined,
      name: "Mia Melano",
    },
    title: undefined,
  },
};
