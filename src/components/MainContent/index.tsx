import ProjectHeaderSection from "../ProjectHeaderSection";
import ProjectStatsSection from "../ProjectStatsSection";

const Component: React.FC = () => {
  return (
    <main className="bg-alabaster flex flex-col items-center">
      <div className="-mt-36 w-1/2 mb-10">
        <ProjectHeaderSection />
      </div>
      <div className="bg-white  w-1/2 ">
        <ProjectStatsSection />
      </div>
      {/* <ProjectInfoSection /> */}
    </main>
  );
};

export default Component;
