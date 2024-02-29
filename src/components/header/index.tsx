import IconLogo from "../../icons/IconLogo";
import NavBar from "../NavBar";

const Component: React.FC = () => {
  return (
    <header className="flex h-[450px] justify-between bg-headerMobile bg-cover text-white lg:bg-headerDesktop">
      <IconLogo isLogo={false} />

      <div className="flex justify-center">
        <NavBar />
      </div>
    </header>
  );
};

export default Component;
