import type { Meta, StoryObj } from "@storybook/react";

import Heading from ".";

const meta = {
  title: "typographies/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    kind: { description: "Format du titre utilisé" },
    content: { description: "Contenu du titre" },
    css: { description: "Style appliqué sur le titre" },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    kind: "h1",
    content: "Format title H1",
    css: "text-indigo-600",
  },
};

export const H2: Story = {
  args: {
    kind: "h2",
    content: "Format title H2",
    css: "text-indigo-600",
  },
};

export const H3: Story = {
  args: {
    kind: "h3",
    content: "Format title H3",
    css: "text-indigo-600",
  },
};

export const H4: Story = {
  args: {
    kind: "h4",
    content: "Format title H4",
    css: "text-indigo-600",
  },
};
