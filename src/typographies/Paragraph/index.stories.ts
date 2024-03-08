import type { Meta, StoryObj } from "@storybook/react";
import { aboutSectionPartOne } from "../../data/data";

import Paragraph from ".";

const meta = {
  title: "typographies/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: aboutSectionPartOne,
    css: "text-sm text-silver",
  },
};
