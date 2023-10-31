import "../../../App.css";

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
      <nav
        style={{
          padding: "0 0 2rem 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "1px solid black"
        }}
      >
        <div>Home Page<br />Logo Goes Here</div>
        <div>
          <Link to="/gtldr_v1/guides">Guides</Link>
          {" | "}
          <Link to="/gtldr_v1/guides/dendro">Dendro</Link>
        </div>

        <div style={{paddingRight: "0.5rem"}}>
          <div
            onClick={handleFonts}
            style={{
              border: "2px solid #F5A201",
              color: "#F5A201",
              backgroundColor: "#013C58",
              width: "100%",
              borderRadius: "50px",
              textAlign: "center",
              cursor: "pointer",
              userSelect: "none",
              padding: "0.3rem 0.15rem"
            }}
          >
            Font Typography
          </div>

          <div
            onClick={handleColors}
            style={{
              border: "2px solid #F5A201",
              color: "#F5A201",
              backgroundColor: "#013C58",
              width: "100%",
              borderRadius: "50px",
              textAlign: "center",
              cursor: "pointer",
              userSelect: "none",
              padding: "0.3rem 0.15rem"
            }}
          >
            Color Palette
          </div>
        </div>

        
      </nav>

      {showFonts && (
        <>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "105px" }}>
            Intended font: Verdana sans-serif (105px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "84px" }}>
            Intended font: Verdana sans-serif (84px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "67px" }}>
            Intended font: Verdana sans-serif (67px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "54px" }}>
            Intended font: Verdana sans-serif (54px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "43px" }}>
            Intended font: Verdana sans-serif (43px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "34px" }}>
            Intended font: Verdana sans-serif (34px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "28px" }}>
            Intended font: Verdana sans-serif (28px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "22px" }}>
            Intended font: Verdana sans-serif (22px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "18px" }}>
            Intended font: Verdana sans-serif (18px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "12px" }}>
            Intended font: Verdana sans-serif (12px).
          </div>
        </>
      )}

      {showColors && (
        <>
          <div>
            <h1>Color Set 1:</h1>
            <div
              style={{
                backgroundColor: "#264653",
                color: "#E76F51",
                width: "10%",
              }}
            >
              #264653
            </div>
            <div
              style={{
                backgroundColor: "#287271",
                color: "#F4A261",
                width: "10%",
              }}
            >
              #287271
            </div>

            <div
              style={{
                backgroundColor: "#2A9D8F",
                color: "#E9C46A",
                width: "10%",
              }}
            >
              #2A9D8F
            </div>
            <div
              style={{
                backgroundColor: "#E9C46A",
                color: "#2A9D8F",
                width: "10%",
              }}
            >
              #E9C46A
            </div>
            <div
              style={{
                backgroundColor: "#F4A261",
                color: "#287271",
                width: "10%",
              }}
            >
              #F4A261
            </div>
            <div
              style={{
                backgroundColor: "#E76F51",
                color: "#264653",
                width: "10%",
              }}
            >
              #E76F51
            </div>
          </div>

          <div>
            <h1>Color Set 2:</h1>
            <div
              style={{
                backgroundColor: "#A8E8F9",
                color: "#FFD35B",
                width: "10%",
              }}
            >
              #A8E8F9
            </div>
            <div
              style={{
                backgroundColor: "#00537A",
                color: "#FFBA42",
                width: "10%",
              }}
            >
              #00537A
            </div>
            <div
              style={{
                backgroundColor: "#013C58",
                color: "#F5A201",
                width: "10%",
              }}
            >
              #013C58
            </div>
            <div
              style={{
                backgroundColor: "#F5A201",
                color: "#013C58",
                width: "10%",
              }}
            >
              #F5A201
            </div>
            <div
              style={{
                backgroundColor: "#FFBA42",
                color: "#00537A",
                width: "10%",
              }}
            >
              #FFBA42
            </div>
            <div
              style={{
                backgroundColor: "#FFD35B",
                color: "#A8E8F9",
                width: "10%",
              }}
            >
              #FFD35B
            </div>
          </div>
        </>
      )}
    </>
  );
}
