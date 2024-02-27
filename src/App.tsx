import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <div id="overlay" className="z-10 bg-black">
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
