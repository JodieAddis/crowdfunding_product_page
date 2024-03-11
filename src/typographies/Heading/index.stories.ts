import type { Meta, StoryObj } from "@storybook/react";

import Heading from ".";

const meta = {
  title: "typographies/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    kind: { description: "Format of the title used"},
    content: { description: "Title content" },
    css: { description: "Style applied to the title" },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    kind: "h1",
    content: "Title H1",
    css: "text-black font-bold text-3xl",
  },
};

export const H2: Story = {
  args: {
    kind: "h2",
    content: "Title H2",
    css: "text-black font-bold text-xl",
  },
};

export const H3: Story = {
  args: {
    kind: "h3",
    content: "Title H3",
    css: "text-black font-bold text-3xl",
  },
};

export const H4: Story = {
  args: {
    kind: "h4",
    content: "Title H4",
    css: "text-black font-bold text-lg",
  },
};
