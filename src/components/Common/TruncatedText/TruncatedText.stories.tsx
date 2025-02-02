import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
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
  decorators: (StoryFn) => {
    return <div style={{ width: 280, height: 280 }}>{StoryFn()}</div>;
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inner = canvas.getByText((content) =>
      content.startsWith("Lorem ipsum dolor")
    );
    const readMore = canvas.getByRole("button");
    // Add 2 to the offsetHeight in all cases so it matches the scrollheight -
    // not clear why this is needed as the component doesn't have a border.

    // The text should be truncated by default - forced in this instance by the
    // large amount of text and the small decorator. The button should also read
    // "Read more" by default.
    expect(inner.offsetHeight + 2).toBeLessThan(inner.scrollHeight);
    expect(readMore).toHaveTextContent("Read more");

    // Simulate clicking the "read more" button
    await userEvent.click(readMore);
    expect(inner.offsetHeight + 2).toEqual(inner.scrollHeight);
    expect(readMore).toHaveTextContent("Read less");

    // Simulate a final click, where everything should return to the initial
    // state.
    await userEvent.click(readMore);
    expect(inner.offsetHeight + 2).toBeLessThan(inner.scrollHeight);
    expect(readMore).toHaveTextContent("Read more");
  },
};
