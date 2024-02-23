type PriceSectionLayout = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: PriceSectionLayout) => (
  <section className="mb-8 flex flex-col items-center">{children}</section>
);

export default Layout;
