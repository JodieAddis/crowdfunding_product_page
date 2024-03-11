import type { Meta, StoryObj } from "@storybook/react";

import ProductHeadearSection from ".";

const meta = {
  title: "components/Products/ProductHeadearSection",
  component: ProductHeadearSection,
  tags:["autodocs"]
} satisfies Meta<typeof ProductHeadearSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
