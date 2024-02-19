import Logo from "../Logo";
import NavBar from "../NavBar";
import headerDesktop from "../../assets/img/header-desktop.jpg";

const Component: React.FC = () => {
  return (
    <header
      className="flex justify-between text-white h-[450px] bg-cover"
      style={{ backgroundImage: `url(${headerDesktop})` }}
    >
      <Logo />
      <NavBar />
    </header>
  );
};

export default Component;

{
  /* <div class="bg-[url('/assets/images/background.jpg')] bg-cover bg-center h-screen">
    <!-- Votre contenu ici -->
</div> */
}
