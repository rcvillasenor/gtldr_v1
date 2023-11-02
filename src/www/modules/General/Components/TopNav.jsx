// import "../../../../index.css";
import "/src/index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TopNav() {
  return (
    <>
      <nav className="flex flex-row justify-between" style={{borderBottom: "1px solid black"}}>
        <Link to="/gtldr_v1/" className="flex items-center">
          <img src="src\assets\logo.png" alt="site logo" style={{width: "20%"}}/>
          <span className="logo-font font-extrabold text-3xl">G-TL;DR</span>
        </Link>
        <div className="flex flex-row items-center">
          <Link to="/gtldr_v1/guides">Guides</Link>
          {" | "}
          <Link to="/gtldr_v1/references">References</Link>
          {" | "}
          <Link to="/gtldr_v1/test">Test</Link>
          <div>Log In</div>
        </div>      
      </nav>
    </>
  );
}
