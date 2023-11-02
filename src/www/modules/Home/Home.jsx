import "../../../App.css";

import TopNav from "../General/Components/TopNav.jsx";

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
      {/* <nav
        style={{
          padding: "1rem 1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // borderBottom: "1px solid black",
        }}
      >
        <div>
          <Link
            style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "3rem" }}
            to="/gtldr_v1/"
          >
            <img style={{ width: "20%" }} src="src\assets\logo.png" />
            <span style={{fontWeight: "800"}} className="text-4xl">G-TL;DR</span>
          </Link>
        </div>
        <div>
          <Link to="/gtldr_v1/guides">Guides</Link>
          {" | "}
          <Link to="/gtldr_v1/guides/dendro">Dendro</Link>
          {" | "}
          <Link to="/gtldr_v1/test">Test</Link>
        </div>
      </nav> */}
    </>
  );
}
