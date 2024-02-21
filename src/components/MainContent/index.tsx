import ProjectHeaderSection from "../ProjectHeaderSection";
import ProjectStatsSection from "../ProjectStatsSection";
import ProjectDescriptionSection from "../ProjectDescriptionSection";

const Component: React.FC = () => {
  return (
    <main className="bg-alabaster flex flex-col items-center">
      <div className="-mt-36 w-80 lg:w-1/2 mb-10">
        <ProjectHeaderSection />
      </div>
      <div className="bg-white  w-1/2 ">
        <ProjectStatsSection />
      </div>
      <ProjectDescriptionSection />
    </main>
  );
};

export default Component;
