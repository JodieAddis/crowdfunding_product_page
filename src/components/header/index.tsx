import headerDesktop from "../../assets/img/header-desktop.jpg";
import IconLogo from "../../icons/IconLogo";
import NavBar from "../NavBar";

const Component: React.FC = () => {
  return (
    <header
      className="flex h-[450px] justify-between bg-cover text-white"
      style={{ backgroundImage: `url(${headerDesktop})` }}
    >
      <IconLogo isLogo={false} />

      <div className="flex justify-center">
        <NavBar />
      </div>
    </header>
  );
};

export default Component;
