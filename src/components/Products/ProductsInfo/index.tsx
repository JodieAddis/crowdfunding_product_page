import Button from "../../Button";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface textContent {
  title: string;
  subtitle: string;
  text: string;
  textDays: string;
  numberDays: string;
  textButton: string;
}

const Component: React.FC<textContent> = ({
  title,
  subtitle,
  text,
  textDays,
  numberDays,
  textButton,
}) => {
  return (
    <>
      <Heading kind="h4" content={title} css="text-sm font-bold mb-2" />
      <Paragraph content={subtitle} css="text-keppel text-sm mb-5" />
      <Paragraph content={text} css="text-silver text-sm mb-6" />
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="mb-4 flex flex-row">
          <Paragraph content={numberDays} css="text-3xl font-bold" />
          <Paragraph content={textDays} css="ml-2 text-silver self-center" />
        </div>
        <Button
          isIcon={false}
          text={textButton}
          css="bg-keppel text-white px-10 text-sm hover:bg-surfieGreen"
        />
      </div>
    </>
  );
};

export default Component;
