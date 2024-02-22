import Button from "../../Button";
import LogoIcon from "../../icons/LogoIcon";
import Headings from "../../../typographies/Heading";
import Paragraphs from "../../../typographies/Paragraph";

const Component: React.FC = () => {
  return (
    <>
      <div className=" flex justify-center">
        <LogoIcon />
      </div>
      <div className="bg-white border-solid border-wildSand border-2 rounded-xl self-center">
        <Headings
          kind="h1"
          content="Mastercraft Bamboo Monitor Riser"
          css="font-extrabold capitalize text-center mx-5 lg:mx-0 text-xl lg:text-3xl mb-4 pt-12"
        />
        <Paragraphs
          kind="p"
          content="A beautiful & handcrafted monitor stand to reduce neck and eye strain"
          css="text-center mx-2 lg:mx-0 font-normal lg:font-medium"
        />
        <div className="flex flex-row justify-around my-10">
          <Button
            text="Back this project"
            isIcon={false}
            css="bg-surfieGreen text-white px-10"
          />
          <Button
            text="Bookmarked"
            isIcon={true}
            css="bg-aquaHaze text-surfieGreen hover:text-doveGray pr-10"
          />
        </div>
      </div>
    </>
  );
};

export default Component;
