import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import SceneInfoPanel from "./SceneInfoPanel";
import {
  MOCK_SCENE_O_RECORD,
  MOCK_SCENE_PLAY_RECORD,
} from "../../../mocks/constants";

const defaultArgs = {
  id: "179",
  o_count: MOCK_SCENE_O_RECORD,
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

/** The appearance of the scene info panel when only the minimum required data
 * is passed. */
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
