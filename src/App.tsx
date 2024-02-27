import Header from "./components/Header";
import MainContent from "./components/MainContent";
import useScreenSize from "./hook/useScreenSize";

function App() {
  // const width = window.innerWidth;
  // const [currentSize, setCurrentSize] = useState<number>(width);
  //   const currentSize = useTonCustomHook()
  // {currentSize ? bookmark mobile : bookmark pc}

  const screenSize = useScreenSize();

  return (
    <>
      <div id="overlay" className="z-10 bg-black">
        <Header />
        <div>
          <h1 className={`text-${screenSize ? "white" : "surfieGreen"}`}>
            TEST
          </h1>
        </div>
        <MainContent />
      </div>
    </>
  );
}

export default App;
