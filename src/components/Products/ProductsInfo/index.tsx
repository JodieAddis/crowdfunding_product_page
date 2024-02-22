import Button from "../../Button";

import Headings from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface textContent {
  title: string;
  subtitle: string;
  text: string;
  textPrice: string;
  numberPrice: string;
  textButton: string;
}

const Component: React.FC<textContent> = ({
  title,
  subtitle,
  text,
  textPrice,
  numberPrice,
  textButton,
}) => {
  return (
    <>
      <Headings kind="h4" content={title} css="text-sm font-bold" />
      <Paragraph kind="p" content={subtitle} css="text-keppel text-sm" />
      <Paragraph kind="p" content={text} css="text-silver text-sm" />
      <div className="flex flex-row">
        <Paragraph kind="p" content={numberPrice} css="text-3xl font-bold" />
        <Paragraph kind="p" content={textPrice} css="text-silver self-center" />
      </div>
      <Button
        isIcon={false}
        text={textButton}
        css="bg-keppel text-white px-10 text-sm"
      />
    </>
  );
};

export default Component;
