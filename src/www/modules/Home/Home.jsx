import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>Home Page</div>
      <nav>
        <Link to="/gtldr_v1/guides">Guides</Link>
        {" | "}
        <Link to="/gtldr_v1/guides/dendro">Dendro</Link>
      </nav>
      <div>
        <h1>Color Set 1:</h1>
        <div
          style={{ backgroundColor: "#264653", color: "#E76F51", width: "10%" }}
        >
          #264653
        </div>
        <div
          style={{ backgroundColor: "#287271", color: "#F4A261", width: "10%" }}
        >
          #287271
        </div>

        <div
          style={{ backgroundColor: "#2A9D8F", color: "#E9C46A", width: "10%" }}
        >
          #2A9D8F
        </div>
        <div
          style={{ backgroundColor: "#E9C46A", color: "#2A9D8F", width: "10%" }}
        >
          #E9C46A
        </div>
        <div
          style={{ backgroundColor: "#F4A261", color: "#287271", width: "10%" }}
        >
          #F4A261
        </div>
        <div
          style={{ backgroundColor: "#E76F51", color: "#264653", width: "10%" }}
        >
          #E76F51
        </div>
      </div>

      
      <div>
        <h1>Color Set 2:</h1>
        <div
          style={{ backgroundColor: "#A8E8F9", color: "#FFD35B", width: "10%" }}
        >
          #A8E8F9
        </div>
        <div
          style={{ backgroundColor: "#00537A", color: "#FFBA42", width: "10%" }}
        >
          #00537A
        </div>
        <div
          style={{ backgroundColor: "#013C58", color: "#F5A201", width: "10%" }}
        >
          #013C58
        </div>
        <div
          style={{ backgroundColor: "#F5A201", color: "#013C58", width: "10%" }}
        >
          #F5A201
        </div>
        <div
          style={{ backgroundColor: "#FFBA42", color: "#00537A", width: "10%" }}
        >
          #FFBA42
        </div>
        <div
          style={{ backgroundColor: "#FFD35B", color: "#A8E8F9", width: "10%" }}
        >
          #FFD35B
        </div>
      </div>
    </>
  );
}
