import {
  aboutSectionPartOne,
  aboutSectionPartTwo,
  textBambooStand,
  textBlackEdition,
  textMahoganyEdition,
} from "../../../data/data";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";
import ProductsInfo from "../ProductsInfo";

const Component = () => {
  return (
    <div className="lg:mx-4">
      <div className="mx-6 mt-4 pt-8">
        <Heading
          kind="h3"
          content="About this project"
          css="text-lg font-bold mb-4"
        />
        <div className="text-sm text-silver">
          <Paragraph content={aboutSectionPartOne} css="mb-6" />
          <Paragraph content={aboutSectionPartTwo} css="mb-6" />
        </div>
      </div>
      <div>
        <section className="subsection mb-6">
          <ProductsInfo
            title="Bamboo Stand"
            subtitle="Pledge $25 or more"
            text={textBambooStand}
            numberDays="101"
            textDays="left"
            textButton="Select reward"
          />
        </section>
        <section className="subsection mb-6">
          <ProductsInfo
            title="Black Edition Stand"
            subtitle="Pledge $75 or more"
            text={textBlackEdition}
            numberDays="64"
            textDays="left"
            textButton="Select reward"
          />
        </section>
        <section className="subsection mb-8">
          <ProductsInfo
            title="Mahogany Special Edition"
            subtitle="Pledge $200 or more"
            text={textMahoganyEdition}
            numberDays="0"
            textDays="left"
            textButton="Select reward"
          />
        </section>
      </div>
    </div>
  );
};

export default Component;
