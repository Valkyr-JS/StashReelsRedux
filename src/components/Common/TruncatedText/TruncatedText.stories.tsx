import type { Meta, StoryObj } from "@storybook/react";
import TruncatedText from ".";

const meta: Meta<typeof TruncatedText> = {
  title: "Components/Common/TruncatedText",
  component: TruncatedText,
  tags: ["autodocs", "buttons", "common", "text"],
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
};

export default meta;
type Story = StoryObj<typeof TruncatedText>;

export const LimitThree: Story = {
  name: "3 line limit",
  args: {
    lineCount: 3,
  },
};
