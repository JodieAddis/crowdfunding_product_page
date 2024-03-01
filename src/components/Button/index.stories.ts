import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: { description: "contenu texte du bouton" },
    css: { description: "défini le style du bouton" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstCase: Story = {
  name: "Button without",
  args: {
    text: "Click Here",
    css: "rounded-full font-bold bg-surfieGreen text-white",
  },
};
