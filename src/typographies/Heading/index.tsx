import { HeadingsProps } from "../../types/interfaces";

const Typographies = ({ kind, content, css }: HeadingsProps) => {
  switch (kind) {
    case "h1":
      return <h1 className={css}>{content}</h1>;
    case "h2":
      return <h2 className={css}>{content}</h2>;
    case "h3":
      return <h3 className={css}>{content}</h3>;
    case "h4":
      return <h4 className={css}>{content}</h4>;
  }
};

export default Typographies;
