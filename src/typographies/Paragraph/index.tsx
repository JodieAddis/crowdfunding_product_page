import { ParagraphProps } from "../../types/interfaces";

const Typographies = ({ kind, content, css }: ParagraphProps) => {
  switch (kind) {
    case "p":
      return <p className={css}>{content}</p>;
    case "span":
      return <span className={css}>{content}</span>;
  }
};

export default Typographies;
