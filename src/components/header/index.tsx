import IconLogo from "../../icons/IconLogo";
import NavBarDesktop from "../NavBarDesktop";
import NavBarMobile from "../NavBarMobile";
import useScreenSize from "../../hook/useScreenSize";

const Component = () => {
  const isMobile = useScreenSize();

  return (
    <header className="flex h-[450px] justify-between bg-headerMobile bg-cover text-white lg:bg-headerDesktop">
      <IconLogo isLogo={false} />

      {isMobile ? <NavBarMobile /> : <NavBarDesktop />}
    </header>
  );
};

export default Component;
