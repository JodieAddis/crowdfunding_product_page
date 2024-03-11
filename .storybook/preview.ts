import documentationTemplate from "./documentationTemplate.mdx";
import "../public/assets/style/tailwind.css";

export default {
  parameters: {
    docs: {
      page: documentationTemplate,
      toc: true,
    },
  },
};
