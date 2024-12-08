import type { Meta, StoryObj } from "@storybook/react";
import SceneInfoPanel from "./SceneInfoPanel";

const defaultSceneData: Scene = {
  title: "Old Man Take On 4 Buff Dudes",
  created_at: "2024-12-08T03:16:40Z",
  files: [],
  galleries: [],
  groups: [],
  id: "1",
  interactive: false,
  movies: [],
  o_history: [],
  organized: true,
  paths: {
    __typename: undefined,
    caption: undefined,
    funscript: undefined,
    interactive_heatmap: undefined,
    preview: undefined,
    screenshot: undefined,
    sprite: undefined,
    stream: undefined,
    vtt: undefined,
    webp: undefined,
  },
  performers: [],
  play_history: [],
  sceneStreams: [],
  scene_markers: [],
  stash_ids: [],
  tags: [],
  updated_at: undefined,
  urls: [],
};

const meta: Meta<typeof SceneInfoPanel> = {
  title: "Components/Scene/InfoPanel",
  component: SceneInfoPanel,
  tags: ["autodocs"],
  args: {
    scene: defaultSceneData,
  },
};

export default meta;
type Story = StoryObj<typeof SceneInfoPanel>;

export const Default: Story = {};
