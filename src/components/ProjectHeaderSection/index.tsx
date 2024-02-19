import ProjectTitle from "../ProjectTitle";
import ProjectDescription from "../ProjectDescription";
import BackButton from "../BackButton";
import BookmarkButton from "../BookmarkButton";

const Component: React.FC = () => {
  return (
    <div>
      <ProjectTitle />
      <ProjectDescription />
      <BackButton />
      <BookmarkButton />
    </div>
  );
};

export default Component;
