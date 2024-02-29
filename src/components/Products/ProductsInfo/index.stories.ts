import type { Meta, StoryObj } from "@storybook/react";

import ProductsInfo from ".";

const meta = {
  title: "components/Products/ProductsInfo",
  component: ProductsInfo,
  tags: ["autodocs"],
  argTypes: {
    title: { description: "Name of the prodcut" },
    subtitle: { description: "Payment commitment" },
    text: { description: "Description of the product" },
    textDays: { description: "Tell if there are days remaining" },
    numberDays: { description: "Number of days remaining" },
  },
} satisfies Meta<typeof ProductsInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageLogo: Story = {
  name: "Section info about product",
  args: {
    title: "Bamboo Stand",
    subtitle: "Pledge $25 or more",
    text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    textDays: "left",
    numberDays: "101",
    textButton: "Select reward",
  },
};
