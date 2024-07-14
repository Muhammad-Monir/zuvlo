import HeroBanner from "./components/Banner/HeroBanner";
import Creators from "./components/Creators/Creators";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <div className="hero--nav--bg--wrapper">
        {/* Navbar starts */}
        <Navbar />
        {/* Navbar ends */}
        <HeroBanner />
      </div>
      
      {/* main content area starts */}
      <Creators />
      {/* main content area ends */}
    </>
  );
};

export default App;
