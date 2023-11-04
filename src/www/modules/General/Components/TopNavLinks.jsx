import { useState } from "react";
import { Link } from "react-router-dom";

export default function TopNavLinks(props) {
  const [linkHover, setLinkHover] = useState(false);

  return (
    <>
      <Link
        to={props.linkTo}
        className="relative group border-3 border-palette2 hover:border-palette4 hover:bg-palette1 w-full"
        onMouseOver={() => setLinkHover(true)}
        onMouseOut={() => setLinkHover(false)}
      >
        {props.linkName}
        {linkHover && (
          <div
            onMouseOut={() => setLinkHover(false)}
            className="absolute top-full left-0 bg-palette2 border-3 border-palette4 w-full justify-center"
          >
            <div className="border-b-3 border-palette4 hover:bg-palette1">
              <Link to="/gtldr_v1/Test">Test</Link> <br />
            </div>
            <div className="border-palette4 hover:bg-palette1 ">
              <Link to="/gtldr_v1/404">404</Link> <br />
            </div>
          </div>
        )}
      </Link>
    </>
  );
}
