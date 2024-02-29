import PriceSectionLayout from "../../../layout/PriceSectionLayout";
import ProductsNumberInfo from "../ProductsNumberInfo";

const Component = () => {
  return (
    <>
      <div>
        <PriceSectionLayout>
          <ProductsNumberInfo title="$89,914" text="of $100,000 backed" />
          <div className="flex w-20 self-center border-b-2 border-solid border-wildSand"></div>
        </PriceSectionLayout>
        <PriceSectionLayout>
          <ProductsNumberInfo title="5,007" text="total backers" />
          <div className="flex w-20 self-center border-b-2 border-solid border-wildSand"></div>
        </PriceSectionLayout>
        <PriceSectionLayout>
          <ProductsNumberInfo title="56" text="days left" />
        </PriceSectionLayout>
        <section className="flex justify-center">
          <input type="range" className="mb-8 w-64 bg-wildSand accent-keppel" />
        </section>
      </div>
    </>
  );
};

export default Component;
