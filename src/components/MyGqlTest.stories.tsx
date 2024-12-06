import type { Meta, StoryObj } from "@storybook/react";
import MyGqlTest from "./MyGqlTest";

const meta: Meta<typeof MyGqlTest> = {
  title: "Demo/MyGqlTest",
  component: MyGqlTest,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MyGqlTest>;

export const Default: Story = {};
