import "../../../../index.css";

import Login from "./Login.jsx";
import siteLogo from "/src/assets/home-logo.svg";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function TopNav() {
  const [scrollDirection, setScrollDirection] = useState("top");
  const [loginClick, setLoginClick] = useState(false);
  const [loginValidate, setLoginValidate] = useState(false);
  const prevScrollY = useRef(0);

  const handleLoginClick = () => {
    setLoginClick((prevState) => !prevState);
    // console.log("Clicked State: " + loginClick);
  };

  useEffect(() => {
    const handleScroll = () => {
      const positionY = window.scrollY;

      if (positionY > prevScrollY.current) {
        setScrollDirection("down");
      } else if (positionY < prevScrollY.current) {
        setScrollDirection("up");
      } else {
        setScrollDirection("top");
      }

      prevScrollY.current = positionY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={"topnav sticky top-0 " + scrollDirection}>
      <nav className="bg-palette2 text-palette6 flex flex-row justify-between">
        <Link
          to="/gtldr_v1/"
          className="flex flex-row items-center w-1/10 m-0 p-0 group"
        >
          <img src={siteLogo} alt="site logo" className="w-20 inline-block" />
          <span className="logo-font font-extrabold text-3xl pr-2 group-hover:text-palette5">
            G-TL;DR
          </span>
        </Link>
        <div className="logo-font flex flex-row items-center gap-1">
          <div>
            <Link to="/gtldr_v1/guides" className="relative group">
              Guides
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-palette4 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            {" | "}
            <Link to="/gtldr_v1/references" className="relative group">
              References
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-palette4 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            {" | "}
            <Link to="/gtldr_v1/support" className="relative group">
              Support
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-palette4 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            {" | "}
            <Link to="/gtldr_v1/test" className="relative group">
              Test
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-palette4 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            {" | "}
          </div>

          {!loginClick ? (
            <div
              className="pl-1 pr-3 hover:cursor-pointer relative group"
              onClick={handleLoginClick}
            >
              Sign In
              <span className="absolute left-1 -right-1.5 -bottom-0.5 h-0.5 w-5/6 bg-palette4 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
            </div>
          ) : (
            <div
              className="pl-1 pr-3 hover:cursor-pointer relative group"
              onClick={handleLoginClick}
            >
              Sign Out
              <span className="absolute left-1 -right-1.5 -bottom-0.5 h-0.5 w-5/6 bg-palette4 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
            </div>
          )}
          {/* {loginClick && <Login />} */}
        </div>
      </nav>
    </div>
  );
}
