import Headings from "../../../typographies/Heading";
import Paragraphs from "../../../typographies/Paragraph";

interface TextProps {
  title: string;
  text: string;
}

const Component = ({ title, text }: TextProps) => {
  return (
    <>
      <Headings kind="h3" content={title} css="text-3xl font-bold mb-2" />
      <Paragraphs kind="p" content={text} css="text-silver text-sm mb-6" />
    </>
  );
};

export default Component;
