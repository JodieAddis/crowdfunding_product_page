import type { Meta, StoryObj } from "@storybook/react";

import ButtonBookMark from ".";

const meta = {
  title: "components/ButtonBookMark",
  component: ButtonBookMark,
  tags: ["autodocs"],
  argTypes: {
    text: { description: "contenu texte du bouton" },
  },
} satisfies Meta<typeof ButtonBookMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BookmarkButton: Story = {
  name: "Button with bookmark icon",
  args: {
    text: "Bookmark",
  },
};
