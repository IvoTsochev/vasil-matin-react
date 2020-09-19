import React from "react";
import "./App.css";
import { SectionsContainer, Section } from "react-fullpage";

// Importing components
import Hero from "./components/heroComponent/Hero";
import Intro from "./components/introComponent/Intro";
import Services from "./components/servicesComponent/Services";
import Logos from "./components/logosComponent/Logos";
import Cards from "./components/businessCardComponent/Cards";
import Flyers from "./components/flyersComponent/Flyers";
import Contact from "./components/contactComponent/Contact";

function App() {
  let options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: "50px",
    sectionPaddingBottom: "50px",
    arrowNavigation: true,
  };

  return (
    <div className="App" id="fullpage">
      <SectionsContainer {...options}>
        <Hero />
        <Intro />
        <Services />
        <Logos />
        <Cards />
        <Flyers />
        <Contact />
      </SectionsContainer>
    </div>
  );
}

export default App;
