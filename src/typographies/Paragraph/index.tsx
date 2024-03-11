import { TypographiesProps } from "../../types/interfaces";

const Typographies = ({ content, css }: TypographiesProps) => (
  <p className={css}>{content}</p>
);

export default Typographies;
