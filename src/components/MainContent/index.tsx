import ProductsHeaderSection from "../Products/ProductsHeaderSection";
import ProductsStatsSection from "../Products/ProductsStatsSection";
import ProductsInfoSection from "../Products/ProductsInfoSection";

const Component: React.FC = () => {
  return (
    <main className="bg-alabaster flex flex-col items-center">
      <div className="-mt-36 mb-6 section">
        <ProductsHeaderSection />
      </div>
      <div className=" mb-6 section">
        <ProductsStatsSection />
      </div>
      <div className="section">
        <ProductsInfoSection />
      </div>
    </main>
  );
};

export default Component;
