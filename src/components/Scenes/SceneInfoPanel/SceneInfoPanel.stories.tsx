import type { Meta, StoryObj } from "@storybook/react";
import SceneInfoPanel from "./SceneInfoPanel";
import {
  MOCK_SCENE_O_RECORD,
  MOCK_SCENE_PLAY_RECORD,
} from "../../../../mocks/constants";

const meta: Meta<typeof SceneInfoPanel> = {
  title: "Components/Scenes/InfoPanel",
  component: SceneInfoPanel,
  tags: ["autodocs"],
  args: {
    userConfig: { ratingSystemOptions: {} },
  },
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SceneInfoPanel>;

/* ------------------------------------------ Example 1 ----------------------------------------- */

const defaultArgs = {
  date: "2025-01-01",
  details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis ipsum augue, posuere porta erat ultrices sit amet. Cras vitae est condimentum, iaculis neque at, facilisis nisi. Sed in tellus accumsan, sagittis ligula non, porttitor ipsum. Vestibulum euismod dolor at tincidunt blandit. Vestibulum porta dapibus ex non convallis. Cras vel orci sapien. Aenean id bibendum ipsum, vel dignissim nunc. Quisque commodo diam eu neque porttitor, quis dictum nunc ultrices.`,
  files: [
    {
      frame_rate: 23.98,
      height: 1080,
    },
  ],
  id: "179",
  o_count: MOCK_SCENE_O_RECORD,
  play_count: MOCK_SCENE_PLAY_RECORD,
  studio: {
    image_path: import.meta.env.VITE_STASH_URI + "/studio/4/image?t=1733167654",
    name: "Ass Parade",
  },
  tags: [
    { id: "1", name: "Tag A" },
    { id: "2", name: "Tag Beta" },
    { id: "3", name: "This is the next tag" },
    { id: "4", name: "T" },
    { id: "5", name: "Taggy McTagFace" },
    { id: "6", name: "Tagbert" },
    { id: "7", name: "Tag Q" },
  ],
  title: "Lorem ipsum dolor sit amet",
};

export const Default: Story = {
  args: defaultArgs,
};

/* ---------------------------------------- Minimal data ---------------------------------------- */

/** The appearance of the scene info panel when only the minimum required data
 * is passed. */
export const MinimalData: Story = {
  args: {
    date: undefined,
    details: undefined,
    id: "179",
    o_count: undefined,
    play_count: undefined,
    tags: [],
    title: undefined,
  },
};
