import TextComponent from "../TextComponent";
import StatsNumbers from "../StatsNumbers";

const Component: React.FC = () => {
  const firstSectionText = "of $100,000 backed";
  const secondSectionText = "total backers";
  const thirdSectionText = "days left";

  return (
    <>
      <div>
        <section>
          <StatsNumbers number="$89,914" />
          <TextComponent text={firstSectionText} />
        </section>
        <section>
          <StatsNumbers number="5,007" />
          <TextComponent text={secondSectionText} />
        </section>
        <section>
          <StatsNumbers number="56" />
          <TextComponent text={thirdSectionText} />
        </section>
      </div>
      <div>
        <input type="range" value="30" min={0} max={100} name="" id="" />
      </div>
    </>
  );
};

export default Component;
