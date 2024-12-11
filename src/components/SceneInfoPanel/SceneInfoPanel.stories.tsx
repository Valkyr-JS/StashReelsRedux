import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import SceneInfoPanel from "./SceneInfoPanel";
import {
  MOCK_SCENE_O_RECORD,
  MOCK_SCENE_PLAY_RECORD,
} from "../../../mocks/constants";

const defaultArgs = {
  date: "2016-07-11",
  details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis ipsum augue, posuere porta erat ultrices sit amet. Cras vitae est condimentum, iaculis neque at, facilisis nisi. Sed in tellus accumsan, sagittis ligula non, porttitor ipsum. Vestibulum euismod dolor at tincidunt blandit. Vestibulum porta dapibus ex non convallis. Cras vel orci sapien. Aenean id bibendum ipsum, vel dignissim nunc. Quisque commodo diam eu neque porttitor, quis dictum nunc ultrices.`,
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
  title: "Mia Malkova's Perfect Ass",
  userConfig: { ratingSystemOptions: {} },
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

/** The appearance of the scene info panel when only the minimum required data
 * is passed. */
export const MinimalData: Story = {
  args: {
    date: undefined,
    details: undefined,
    o_count: undefined,
    play_count: undefined,
    studio: {
      image_path: undefined,
      name: "Mia Melano",
    },
    title: undefined,
  },
};

/** Tests the play count button click event. */
export const TestPlayCountClick: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button: HTMLButtonElement = canvas.getByRole("button", {
      name: `Play count ${MOCK_SCENE_PLAY_RECORD}`,
    });
    const initialValue = +button.value;

    // Simulate click
    await userEvent.click(button);

    // Wait for the GQL mutation to resolve, then check that the button value has updated.
    await waitFor(() => {
      const updatedButton: HTMLButtonElement = canvas.getByRole("button", {
        name: `Play count ${initialValue + 1}`,
      });

      expect(+updatedButton.value).toBe(initialValue + 1);
    });
  },
};

/** Tests the O count button click event. */
export const TestOCountClick: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button: HTMLButtonElement = canvas.getByRole("button", {
      name: `O count ${MOCK_SCENE_O_RECORD}`,
    });
    const initialValue = +button.value;

    // Simulate click
    await userEvent.click(button);

    // Wait for the GQL mutation to resolve, then check that the button value has updated.
    await waitFor(() => {
      const updatedButton: HTMLButtonElement = canvas.getByRole("button", {
        name: `O count ${initialValue + 1}`,
      });

      expect(+updatedButton.value).toBe(initialValue + 1);
    });
  },
};
