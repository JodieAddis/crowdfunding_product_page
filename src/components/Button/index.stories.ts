import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    isIcon: { description: "indique la présence ou non d'une icone" },
    text: { description: "contenu texte du bouton" },
    css: { description: "défini le style du bouton" },
    cssText: { description: "défini le style du text dans le bouton" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstCase: Story = {
  name: "Button without",
  args: {
    text: "Click Here",
    css: "rounded-full font-bold bg-surfieGreen text-white",
    cssText: "px-10",
  },
};

export const SecondCase: Story = {
  name: "Button with icon",
  args: {
    isIcon: true,
    text: "Click Here",
    css: "rounded-full font-bold bg-surfieGreen text-white",
    cssText: "pr-10",
  },
};
