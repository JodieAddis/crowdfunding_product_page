import Button from "../../Button";
import Heading from "../../../typographies/Heading";
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
      <Heading kind="h4" content={title} css="text-sm font-bold mb-2" />
      <Paragraph content={subtitle} css="text-keppel text-sm mb-5" />
      <Paragraph content={text} css="text-silver text-sm mb-5" />
      <div className="mb-4 flex flex-row">
        <Paragraph content={numberPrice} css="text-3xl font-bold" />
        <Paragraph content={textPrice} css="ml-2 text-silver self-center" />
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
