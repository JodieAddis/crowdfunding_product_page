import type { Meta, StoryObj } from "@storybook/react";

import IconLogo from ".";

const meta = {
  title: "icons/IconMenu",
  component: IconLogo,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "Dark",
      values: [
        { name: "Light Gray", value: "#AEBAC6" },
        { name: "Dark", value: "#131313" },
      ],
    },
  },
} satisfies Meta<typeof IconLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuClosed: Story = {
  args: {
    isOpen: true,
  },
};

export const MenuOpened: Story = {
  args: {
    isOpen: false,
  },
};
