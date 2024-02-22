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
      <div className="mt-4 mx-6">
        <Heading
          kind="h3"
          content="About this project"
          css="text-lg font-bold mb-4"
        />
        <div className="text-silver text-sm">
          <Paragraph kind="p" content={aboutSectionPartOne} css="mb-6" />
          <Paragraph kind="p" content={aboutSectionPartTwo} css="mb-6" />
        </div>
      </div>
      <div>
        <section className="subsection mb-6">
          <ProductsInfo
            title="Bamboo Stand"
            subtitle="Pledge $25 or more"
            text={textBambooStand}
            numberPrice="101"
            textPrice="left"
            textButton="Select reward"
          />
        </section>
        <section className="subsection mb-6">
          <ProductsInfo
            title="Black Edition Stand"
            subtitle="Pledge $75 or more"
            text={textBlackEdition}
            numberPrice="64"
            textPrice="left"
            textButton="Select reward"
          />
        </section>
        <section className="subsection mb-8">
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
