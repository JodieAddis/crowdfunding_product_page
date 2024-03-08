import type { Meta, StoryObj } from "@storybook/react";

import IconBookMark from ".";

const meta = {
  title: "icons/IconBookMark",
  component: IconBookMark,
  tags: ["autodocs"],
} satisfies Meta<typeof IconBookMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Icon type bookmark",
  args: {
    isClicked: false,
    handleClick: () => {},
  },
};

export const Clicked: Story = {
  name: "Icon type bookmark",
  args: {
    isClicked: true,
    handleClick: () => {},
  },
};
