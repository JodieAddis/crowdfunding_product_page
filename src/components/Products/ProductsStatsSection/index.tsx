import PriceSectionLayout from "../../../layout/PriceSectionLayout";
import ProductsNumberInfo from "../ProductsNumberInfo";
import Line from "../../Line";

import useScreenSize from "../../../hook/useScreenSize";

const Component = () => {
  const isMobile = useScreenSize();
  return (
    <>
      <div className="mt-12">
        <section className="flex flex-col lg:flex-row lg:justify-around">
          <PriceSectionLayout>
            <div
              className={`flex ${isMobile ? "flex-col items-center" : "flex-row"}`}
            >
              <ProductsNumberInfo title="$89,914" text="of $100,000 backed" />
              <Line />
            </div>
          </PriceSectionLayout>
          <PriceSectionLayout>
            <div
              className={`flex ${isMobile ? "flex-col items-center" : "flex-row"}`}
            >
              <ProductsNumberInfo title="5,007" text="total backers" />
              <Line />
            </div>
          </PriceSectionLayout>
          <PriceSectionLayout>
            <ProductsNumberInfo title="56" text="days left" />
          </PriceSectionLayout>
        </section>
        <section className="flex justify-center">
          <input
            type="range"
            value={56}
            max={70}
            className="pointer-events-none mb-8 w-64 border-none bg-wildSand accent-keppel lg:w-5/6"
          />
        </section>
      </div>
    </>
  );
};

export default Component;
