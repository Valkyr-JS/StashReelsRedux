import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { within, userEvent, waitFor } from "@storybook/testing-library";
import { useState } from "react";
import MiniValueButton from "./MiniValueButton";
import { PlayCountIcon } from "../../Icons/Icons";
import { MOCK_SCENE_PLAY_RECORD } from "../../../../mocks/constants";

const meta: Meta<typeof MiniValueButton> = {
  title: "Components/Buttons/MiniValueButton",
  component: MiniValueButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MiniValueButton>;

/* ----------------------------------------- Play count ----------------------------------------- */

const playCountArgs = {
  onClick: fn(),
  Icon: PlayCountIcon,
  value: MOCK_SCENE_PLAY_RECORD,
};

// Wrap the component in a parent to allow state management.
const PlayCountTemplate: typeof MiniValueButton = (props) => {
  const [val, setVal] = useState<number>(playCountArgs.value);
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (props.onClick) props.onClick(e);
    setVal(val + 1);
  };

  return <MiniValueButton {...props} value={val} onClick={clickHandler} />;
};

export const PlayCount: Story = {
  decorators: () => {
    return <PlayCountTemplate {...playCountArgs} />;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button: HTMLButtonElement = canvas.getByRole("button");
    const initialValue = +button.value;

    // Simulate click
    await userEvent.click(button);

    // Check if the click event has resolved successfully.
    await waitFor(() => {
      const updatedButton: HTMLButtonElement = canvas.getByRole("button");

      expect(+updatedButton.value).toBe(initialValue + 1);
      expect(playCountArgs.onClick).toHaveBeenCalled();
    });
  },
};
