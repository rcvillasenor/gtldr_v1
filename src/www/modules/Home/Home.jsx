import "../../../App.css";

import TopNav from "../General/Components/TopNav.jsx";
import Footer from "../General/Components/Footer.jsx";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [showFonts, setShowFonts] = useState(false);
  const [showColors, setShowColors] = useState(false);

  const handleFonts = () => {
    setShowFonts((prevState) => !prevState);
    if (showColors) {
      setShowColors(false);
    }
  };

  const handleColors = () => {
    setShowColors((prevState) => !prevState);
    if (showFonts) {
      setShowFonts(false);
    }
  };

  return (
    <>
      <TopNav />
      <Footer />
    </>
  );
}
