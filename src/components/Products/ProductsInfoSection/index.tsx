import ProductsInfo from "../ProductsInfo";
import {
  aboutSectionPartOne,
  aboutSectionPartTwo,
  textBambooStand,
  textBlackEdition,
  textMahoganyEdition,
} from "../../../data/data";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <>
      <div>
        <Heading
          kind="h3"
          content="About this project"
          css="text-lg font-bold"
        />
        <div className="text-silver text-sm">
          <Paragraph kind="p" content={aboutSectionPartOne} />
          <Paragraph kind="p" content={aboutSectionPartTwo} />
        </div>
      </div>
      <div>
        <section>
          <ProductsInfo
            title="Bamboo Stand"
            subtitle="Pledge $25 or more"
            text={textBambooStand}
            numberPrice="101"
            textPrice="left"
            textButton="Select reward"
          />
        </section>
        <section className="mx-5 border-solid border-silver border-1 rounded-xl bg-white">
          <ProductsInfo
            title="Black Edition Stand"
            subtitle="Pledge $75 or more"
            text={textBlackEdition}
            numberPrice="64"
            textPrice="left"
            textButton="Select reward"
          />
        </section>
        <section>
          <ProductsInfo
            title="Mahogany Special Edition"
            subtitle="Pledge $200 or more"
            text={textMahoganyEdition}
            numberPrice="0"
            textPrice="left"
            textButton="Select reward"
          />
        </section>
      </div>
    </>
  );
};

export default Component;
