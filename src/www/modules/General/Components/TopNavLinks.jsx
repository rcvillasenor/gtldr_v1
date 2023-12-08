import { useState } from "react";
import { Link } from "react-router-dom";

export default function TopNavLinks(props) {
  const [linkHover, setLinkHover] = useState(false);

  return (
    <>
      <Link
        to={props.linkTo}
        target={props.target}
        className="select-none relative group border-3 border-palette2 hover:border-palette4 hover:bg-palette1 w-full px-1 py-1"
        onMouseOver={() => setLinkHover(true)}
        onMouseOut={() => setLinkHover(false)}
      >
        {props.linkName}
        {linkHover && props.subLink1 && (
          <div
            onMouseOut={() => setLinkHover(false)}
            className="absolute top-full left-0 bg-palette2 border-3 border-palette4 w-full justify-center"
          >
            <Link to={props.subLink1}>
              <div
                className={`${
                  props.subLink2 ? "border-b-3 " : ""
                } border-palette4 hover:bg-palette1 px-1 py-1`}
              >
                {props.subLinkName1}
              </div>
            </Link>
            {/* copy the following conditional chunk in case there are more sublinks (change the linking and the name): */}
            {props.subLink2 && (
              <Link to={props.subLink2}>
                <div
                  className={`${
                    props.subLink3 ? "border-b-3 " : ""
                  } border-palette4 hover:bg-palette1 px-1 py-1`}
                >
                  {props.subLinkName2}
                </div>
              </Link>
            )}
            {props.subLink3 && (
              <Link to={props.subLink3}>
                <div
                  className={`${
                    props.subLink4 ? "border-b-3 " : ""
                  } border-palette4 hover:bg-palette1 px-1 py-1`}
                >
                  {props.subLinkName3}
                </div>
              </Link>
            )}
          </div>
        )}
      </Link>
    </>
  );
}
