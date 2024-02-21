import ProjectInformation from "../ProjectInformation";

const Component: React.FC = () => {
  return (
    <>
      <div>
        <section>
          <ProjectInformation title="$89,914" text="of $100,000 backed" />
        </section>
        <section>
          <ProjectInformation title="5,007" text="total backers" />
        </section>
        <section>
          <ProjectInformation title="56" text="days left" />
        </section>
      </div>
    </>
  );
};

export default Component;
