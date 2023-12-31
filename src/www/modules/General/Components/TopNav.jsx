import "../../../../index.css";

// import Login from "./Login.jsx";
import siteLogo from "/src/assets/home-logo.svg";
import TopNavLinks from "./TopNavLinks.jsx";

import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function TopNav() {
  const [scrollDirection, setScrollDirection] = useState("top");
  const [loginClick, setLoginClick] = useState(false);
  // const [loginValidate, setLoginValidate] = useState(false); //for future login functionality
  const prevScrollY = useRef(0);

  const handleLoginClick = () => {
    setLoginClick((prevState) => !prevState);
    // console.log("Clicked State: " + loginClick); //debugging
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
    <div className={"select-none topnav sticky top-0 " + scrollDirection}>
      <nav className="bg-palette2 text-palette5 flex flex-row justify-between shadow-2xl">
        <Link
          to="/gtldr_v1/"
          className="flex flex-row items-center w-1/10 m-0 pl-1.5 group"
        >
          <img src={siteLogo} alt="site logo" className="w-12 inline-block" />
          <span className="google-font-0 font-extrabold text-3xl pr-2 pb-0.5 text-center group-hover:text-palette6">
            G-TL;DR
          </span>
        </Link>
        <div className="google-font-0 flex flex-row items-center gap-1">
          <div>
            <TopNavLinks
              linkTo="/gtldr_v1/guides"
              linkName="Mechanics Guides"
              subLink1="/gtldr_v1/guides/dendro"
              subLinkName1="Dendro Reactions"
              subLink2="/gtldr_v1/guides/elemental-gauge-theory"
              subLinkName2="Elemental Gauge Theory"
            />
            {" | "}
            <TopNavLinks
              linkTo="/gtldr_v1/references"
              linkName="Quick References"
              subLink1="/gtldr_v1/references/furina-healer-tier-list"
              subLinkName1="Furina Healer Tier List"
              subLink2="/gtldr_v1/references/energy-requirements"
              subLinkName2="Energy Requirements"
              subLink3="/gtldr_v1/references/char-tldrs"
              subLinkName3="Character TL;DRs"
            />
            {" | "}
            <TopNavLinks
              linkTo="/gtldr_v1/support"
              linkName="Support"
              subLink1="/gtldr_v1/404/"
              subLinkName1="404 Page Mock Up"
              subLink2="/gtldr_v1/test/"
              subLinkName2="Test Style Module"
            />
            {" | "}
          </div>

          {/* following conditional block needs to be modified when we get login modal + validation sorted */}
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
