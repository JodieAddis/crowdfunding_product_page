import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <div id="overlay" className="bg-black z-10">
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
