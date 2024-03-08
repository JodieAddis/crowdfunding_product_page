import type { Meta, StoryObj } from "@storybook/react";

import ProductStatsSection from ".";

const meta = {
  title: "components/Products/ProductStatsSection",
  component: ProductStatsSection,
  tags:["autodocs"]
} satisfies Meta<typeof ProductStatsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
