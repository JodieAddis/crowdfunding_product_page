import NavBar from "../NavBar";
import headerDesktop from "../../assets/img/header-desktop.jpg";
import LogoName from "../icons/LogoName";

const Component: React.FC = () => {
  return (
    <header
      className="flex justify-between text-white h-[450px] bg-cover"
      style={{ backgroundImage: `url(${headerDesktop})` }}
    >
      <LogoName />
      <div className="flex justify-center">
        <NavBar />
      </div>
    </header>
  );
};

export default Component;
