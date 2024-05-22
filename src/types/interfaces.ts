import { ReactNode } from "react";

export interface TypographiesProps {
  content: string | ReactNode;
  css?: string;
}

export interface HeadingsProps extends TypographiesProps {
  kind: "h1" | "h2" | "h3" | "h4";
}
