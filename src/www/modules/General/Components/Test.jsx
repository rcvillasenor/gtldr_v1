import "../../../../App.css";

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
          padding: "1rem 1rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "1px solid black",
        }}
      >
        <div>
          Home Page
          <br />
          Logo Goes Here
        </div>
        <div>
          <Link to="/gtldr_v1/">Home</Link>
        </div>

        <div style={{ paddingRight: "0.5rem" }}>
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
              padding: "0.3rem 0.15rem",
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
              padding: "0.3rem 0.15rem",
            }}
          >
            Color Palette
          </div>
        </div>
      </nav>

      {showFonts && (
        <>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "32px" }}>
            Intented Font:
            <br />
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "105px" }}>
            Verdana sans-serif (105px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "84px" }}>
            Verdana sans-serif (84px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "67px" }}>
            Verdana sans-serif (67px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "54px" }}>
            Verdana sans-serif (54px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "43px" }}>
            Verdana sans-serif (43px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "34px" }}>
            Verdana sans-serif (34px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "28px" }}>
            Verdana sans-serif (28px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "22px" }}>
            Verdana sans-serif (22px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "18px" }}>
            Verdana sans-serif (18px).
          </div>
          <div style={{ fontFamily: "Verdana, sans-serif", fontSize: "12px" }}>
            Verdana sans-serif (12px).
          </div>
        </>
      )}

      {showColors && (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", paddingTop: "2rem"}}>
          <div>
            <h1>Color Set 1:</h1>
            <div
              style={{
                backgroundColor: "#264653",
                color: "#E76F51",
                width: "100%",
              }}
            >
              #264653
            </div>
            <div
              style={{
                backgroundColor: "#287271",
                color: "#F4A261",
                width: "100%",
              }}
            >
              #287271
            </div>

            <div
              style={{
                backgroundColor: "#2A9D8F",
                color: "#E9C46A",
                width: "100%",
              }}
            >
              #2A9D8F
            </div>
            <div
              style={{
                backgroundColor: "#E9C46A",
                color: "#2A9D8F",
                width: "100%",
              }}
            >
              #E9C46A
            </div>
            <div
              style={{
                backgroundColor: "#F4A261",
                color: "#287271",
                width: "100%",
              }}
            >
              #F4A261
            </div>
            <div
              style={{
                backgroundColor: "#E76F51",
                color: "#264653",
                width: "100%",
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
                width: "100%",
              }}
            >
              #A8E8F9
            </div>
            <div
              style={{
                backgroundColor: "#00537A",
                color: "#FFBA42",
                width: "100%",
              }}
            >
              #00537A
            </div>
            <div
              style={{
                backgroundColor: "#013C58",
                color: "#F5A201",
                width: "100%",
              }}
            >
              #013C58
            </div>
            <div
              style={{
                backgroundColor: "#F5A201",
                color: "#013C58",
                width: "100%",
              }}
            >
              #F5A201
            </div>
            <div
              style={{
                backgroundColor: "#FFBA42",
                color: "#00537A",
                width: "100%",
              }}
            >
              #FFBA42
            </div>
            <div
              style={{
                backgroundColor: "#FFD35B",
                color: "#A8E8F9",
                width: "100%",
              }}
            >
              #FFD35B
            </div>
          </div>

          <div>
            <h1>Color Set 3:</h1>
            <div
              style={{
                backgroundColor: "#0E2045",
                color: "#FFD35B",
                width: "100%",
              }}
            >
              #0E2045
            </div>
            <div
              style={{
                backgroundColor: "#FF5C5C",
                color: "#FFBA42",
                width: "100%",
              }}
            >
              #FF5C5C
            </div>
            <div
              style={{
                backgroundColor: "#A6AFBD",
                color: "#F5A201",
                width: "100%",
              }}
            >
              #A6AFBD
            </div>
            <div
              style={{
                backgroundColor: "#3D73DD",
                color: "#013C58",
                width: "100%",
              }}
            >
              #3D73DD
            </div>
          </div>

          <div>
            <h1>Color Set 4:</h1>
            <div
              style={{
                backgroundColor: "#FEAE49",
                color: "#FFD35B",
                width: "100%",
              }}
            >
              #FEAE49
            </div>
            <div
              style={{
                backgroundColor: "#3D424A",
                color: "#FFBA42",
                width: "100%",
              }}
            >
              #3D424A
            </div>
            <div
              style={{
                backgroundColor: "#57BEE6",
                color: "#F5A201",
                width: "100%",
              }}
            >
              #57BEE6
            </div>
            <div
              style={{
                backgroundColor: "#1E1E2A",
                color: "#013C58",
                width: "100%",
              }}
            >
              #1E1E2A
            </div>
            <div
              style={{
                backgroundColor: "#E6E5DE",
                color: "#013C58",
                width: "100%",
              }}
            >
              #E6E5DE
            </div>
          </div>
        </div>
      )}
    </>
  );
}
