import Button from "../../Button";
import IconLogo from "../../../icons/IconLogo";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import useScreenSize from "../../../hook/useScreenSize";
import IconBookMark from "../../../icons/IconBookMark";

const Component: React.FC = () => {
  const isMobile = useScreenSize();
  return (
    <>
      <div className=" flex justify-center">
        <IconLogo isLogo={true} />
      </div>
      <div className="self-center rounded-xl border-2 border-solid border-wildSand bg-white">
        <Heading
          kind="h1"
          content="Mastercraft Bamboo Monitor Riser"
          css="font-extrabold capitalize text-center mx-5 lg:mx-0 text-xl lg:text-3xl mb-4 pt-12"
        />
        <Paragraph
          content="A beautiful & handcrafted monitor stand to reduce neck and eye strain"
          css="text-center mx-2 lg:mx-0 font-normal lg:font-medium"
        />
        <div className="my-10 flex flex-row justify-around">
          {isMobile ? (
            <>
              <Button
                text="Back this project"
                isIcon={false}
                css="bg-surfieGreen text-white px-10"
              />
              <IconBookMark />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Component;
