import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface TextProps {
  title: string;
  text: string;
}

const Component = ({ title, text }: TextProps) => {
  return (
    <>
      <Heading kind="h3" content={title} css="text-3xl font-bold mb-2" />
      <Paragraph content={text} css="text-silver text-sm mb-6" />
    </>
  );
};

export default Component;
