import ProjectTitle from "../ProjectTitle";
import TextComponent from "../TextComponent";
import Button from "../Button";

const Component: React.FC = () => {
  const text =
    "A beautiful & handcrafted monitor stand to reduce neck and eye strain";
  return (
    <div>
      <ProjectTitle />
      <TextComponent text={text} />
      <Button text="Back this project" />
      <Button isIcon={true} text="Bookmarked" />
    </div>
  );
};

export default Component;
