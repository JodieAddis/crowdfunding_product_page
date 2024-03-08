import Header from "../../components/Header";
import ProductsHeaderSection from "../../components/Products/ProductsHeaderSection";
import ProductsInfoSection from "../../components/Products/ProductsInfoSection";
import ProductsStatsSection from "../../components/Products/ProductsStatsSection";

function Page() {
  return (
    <>
      <div>
        <Header />
        <main className="flex flex-col items-center bg-alabaster">
          <div className="section -mt-36 mb-6" >
            <ProductsHeaderSection />
          </div>
          <div className=" section mb-6">
            <ProductsStatsSection />
          </div>
          <div className="section mb-6">
            <ProductsInfoSection />
          </div>
        </main>
      </div>
    </>
  );
}

export default Page;
