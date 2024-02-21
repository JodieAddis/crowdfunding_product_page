import ProjectInformation from "../ProjectInformation";

const Component: React.FC = () => {
  return (
    <>
      <div>
        <section className="flex flex-col items-center mb-8">
          <ProjectInformation title="$89,914" text="of $100,000 backed" />
          <div className="border-wildSand border-b-2 border-solid w-20 flex self-center"></div>
        </section>
        <section className="flex flex-col items-center mb-8">
          <ProjectInformation title="5,007" text="total backers" />
          <div className="border-wildSand border-b-2 border-solid w-20 flex self-center"></div>
        </section>
        <section className="flex flex-col items-center mb-8">
          <ProjectInformation title="56" text="days left" />
        </section>
        <section className="flex justify-center">
          <input type="range" className="accent-keppel bg-wildSand w-64 mb-8" />
        </section>
      </div>
    </>
  );
};

export default Component;
