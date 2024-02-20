import ProjectTitle from "../ProjectTitle";
import TextComponent from "../TextComponent";
import Button from "../Button";
import LogoIcon from "../LogoIcon";

const Component: React.FC = () => {
  const text =
    "A beautiful & handcrafted monitor stand to reduce neck and eye strain";
  return (
    <>
      <div className=" flex justify-center">
        <LogoIcon />
      </div>
      <div className="bg-white border-solid border-wildSand border-2 rounded-xl self-center">
        <ProjectTitle />
        <TextComponent text={text} positionCSS="center" />
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
