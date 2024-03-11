import type { Meta, StoryObj } from "@storybook/react";

import Header from ".";

const meta = {
  title: "components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Header of the page",
};
