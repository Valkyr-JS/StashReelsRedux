import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from ".";

const meta: Meta<typeof LinkButton> = {
  title: "Components/Buttons/LinkButton",
  component: LinkButton,
  tags: ["autodocs", "buttons"],
  args: {
    children: "Link button",
  },
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {};

export const InContext: Story = {
  decorators: (StoryFn) => {
    return (
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, sit
        minus! Fugit necessitatibus beatae unde minus enim explicabo, quaerat
        suscipit, perferendis temporibus nam hic officiis consequatur
        voluptates, nemo blanditiis quidem. {StoryFn()}
      </div>
    );
  },
};
