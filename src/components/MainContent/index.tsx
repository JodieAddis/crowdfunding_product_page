import ProductsHeaderSection from "../Products/ProductsHeaderSection";
import ProductsStatsSection from "../Products/ProductsStatsSection";
import ProductsInfoSection from "../Products/ProductsInfoSection";

const Component: React.FC = () => {
  return (
    <main className="bg-alabaster flex flex-col items-center">
      <div className="-mt-36 w-80 lg:w-1/2 mb-10">
        <ProductsHeaderSection />
      </div>
      <div className="bg-white w-80 lg:w-1/2 border-wildSand border-solid border-2 rounded-xl pt-8">
        <ProductsStatsSection />
      </div>
      <div className="bg-white">
        <ProductsInfoSection />
      </div>
    </main>
  );
};

export default Component;
