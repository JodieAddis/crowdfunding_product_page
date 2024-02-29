import type { Meta, StoryObj } from "@storybook/react";

import IconLogo from ".";

const meta = {
  title: "icons/IconLogo",
  component: IconLogo,
  tags: ["autodocs"],
  argTypes: {
    isLogo: {
      description:
        "Composant permettant d'afficher le logo ou le nom de la page en fonction de la valeur du booléen.",
    },
  },
} satisfies Meta<typeof IconLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageLogo: Story = {
  name: "Logo of the page",
  args: {
    isLogo: true,
  },
};

export const PageName: Story = {
  name: "Name of the page",
  args: {
    isLogo: false,
  },
};
