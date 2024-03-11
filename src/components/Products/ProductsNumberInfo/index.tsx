import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface TextProps {
  title: string;
  text: string;
}

const Component = ({ title, text }: TextProps) => {
  return (
    <div className="flex flex-col">
      <Heading kind="h3" content={title} css="text-3xl font-extrabold mb-2" />
      <Paragraph content={text} css="text-silver text-sm mb-6" />
    </div>
  );
};

export default Component;
