import type { Meta, StoryObj } from "@storybook/react";

import IconBookMark from ".";

const meta = {
  title: "icons/IconBookMark",
  component: IconBookMark,
} satisfies Meta<typeof IconBookMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Icon type bookmark",
};
