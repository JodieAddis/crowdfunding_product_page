interface TypographiesProps {
  content: string;
  css?: string;
}

export interface ParagraphProps extends TypographiesProps {
  kind: "p" | "span";
}

export interface HeadingsProps extends TypographiesProps {
  kind: "h1" | "h2" | "h3" | "h4";
}
