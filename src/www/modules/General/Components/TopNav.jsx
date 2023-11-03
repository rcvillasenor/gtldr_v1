import "../../../../index.css";
// import "/src/index.css";
import siteLogo from "/src/assets/home-logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TopNav() {
    const [loginClick, setLoginClick] = useState(false);
    const handleLoginClick = () => {
        setLoginClick((prevState) => !prevState);
        console.log("Clicked State: " + loginClick);
    }

  return (
    <>
      <nav
        className="flex flex-row justify-between"
        style={{ borderBottom: "1px solid black" }}
      >
        <Link to="/gtldr_v1/" className="flex flex-row items-center w-1/10 m-0 p-0 group">
          <img src={siteLogo} alt="site logo" className="w-20 inline-block" />
          <span className="logo-font font-extrabold text-3xl pr-2 relative">
            G-TL;DR
            <span className="absolute inset-x-0 bottom-0 h-1 bg-indigo-600 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
          </span>
        </Link>
        <div className="flex flex-row items-center gap-1">
          <div>
            <Link to="/gtldr_v1/guides">Guides</Link>
            {" | "}
            <Link to="/gtldr_v1/references">References</Link>
            {" | "}
            <Link to="/gtldr_v1/test">Test</Link>
            {" | "}
            <Link to="/gtldr_v1/support">Support</Link>
            {" | "}
          </div>
          <div className="pr-3 hover:cursor-pointer" onClick={handleLoginClick}>Log In</div>
        </div>
        
      </nav>
    </>
  );
}
