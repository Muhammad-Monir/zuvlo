import { useEffect } from "react";
import HeroBanner from "./components/Banner/HeroBanner";
import Creators from "./components/Creators/Creators";
import FeatureDetails from "./components/FeatureDetails/FeatureDetails";
import GridFeature from "./components/GridFeature/GridFeature";
import Navbar from "./components/Navbar/Navbar";

import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

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
      <FeatureDetails />
      <GridFeature />
      {/* main content area ends */}
    </>
  );
};

export default App;
