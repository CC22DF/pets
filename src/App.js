import React from "react";
import Hero from "./components/Hero";
import Cta1 from "./components/Cta1"
import Footer from "./components/Footer.js";
function App() {
  return (
    <div className="flex flex-col space-y-12 h-full">
      <Hero/>
      <Cta1/>
      <Footer/>
    </div>
  );
}

export default App;
