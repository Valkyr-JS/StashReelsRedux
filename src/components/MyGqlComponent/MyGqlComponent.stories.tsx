import type { Meta, StoryObj } from "@storybook/react";
import { SbDecApolloProvider } from "@/storybook/decorators";
import MyGqlTest from ".";

const meta: Meta<typeof MyGqlTest> = {
  title: "Demo/MyGqlTest",
  component: MyGqlTest,
  tags: ["autodocs"],
  decorators: [SbDecApolloProvider],
};

export default meta;
type Story = StoryObj<typeof MyGqlTest>;

export const Default: Story = {};
