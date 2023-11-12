import Anemo from "./Dendro-Anemo.jsx";
import Cryo from "./Dendro-Cryo.jsx";
import Electro from "./Dendro-Electro.jsx";
import Geo from "./Dendro-Geo.jsx";
import Hydro from "./Dendro-Hydro.jsx";
import Pyro from "./Dendro-Pyro.jsx";

import { useState } from "react";

export default function ButtonTray() {
  const [buttonStates, setButtonStates] = useState({
    button1: { toggled: false, name: "Anemo", color: "bg-anemo" },
    button2: { toggled: false, name: "Cryo", color: "bg-cryo" },
    button3: { toggled: false, name: "Electro", color: "bg-electro" },
    button4: { toggled: false, name: "Geo", color: "bg-geo" },
    button5: { toggled: false, name: "Hydro", color: "bg-hydro" },
    button6: { toggled: false, name: "Pyro", color: "bg-pyro" },
  });

  return (
    <>
      <h1 className="text-center pt-2">With (Pick an Element): <br /></h1>
      <div className="flex flex-wrap justify-center">
        {Object.keys(buttonStates).map((button) => (
          <div
            key={button}
            className={`${buttonStates[button].color} mx-10 my-5 py-1 px-3 border-solid text-center bg-palette5 rounded-2xl hover:cursor-pointer`}
            onClick={() =>
              setButtonStates((prevStates) => ({
                ...prevStates,
                [button]: {
                  ...prevStates[button],
                  toggled: !prevStates[button].toggled,
                },
              }))
            }
          >
            {buttonStates[button].name}
          </div>
        ))}
      </div>
      {buttonStates["button1"].toggled && <Anemo />}
      {buttonStates["button2"].toggled && <Cryo />}
      {buttonStates["button3"].toggled && <Electro />}
      {buttonStates["button4"].toggled && <Geo />}
      {buttonStates["button5"].toggled && <Hydro />}
      {buttonStates["button6"].toggled && <Pyro />}
    </>
  );
}
