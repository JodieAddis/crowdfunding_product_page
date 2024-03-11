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
  const getOpacity = () => {
    return numberDays === "0" ? "opacity-50" : "";
  };

  return (
    <div className={`${getOpacity()} mx-3`}>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <Heading
          kind="h4"
          content={title}
          css="text-sm lg:text-lg font-bold mb-2"
        />
        <Paragraph
          content={subtitle}
          css="text-keppel text-sm lg:text-base mb-5 font-medium"
        />
      </div>
      <Paragraph content={text} css="text-silver text-sm mb-6" />
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="mb-4 flex flex-row">
          <Paragraph content={numberDays} css="text-3xl font-bold" />
          <Paragraph content={textDays} css="ml-2 text-silver " />
        </div>
        <Button
          text={textButton}
          css={`
            ${numberDays === "0"
              ? "bg-black cursor-not-allowed opacity-50"
              : "bg-keppel hover:bg-surfieGreen"} text-white px-10 text-sm
          `}
        />
      </div>
    </div>
  );
};

export default Component;
