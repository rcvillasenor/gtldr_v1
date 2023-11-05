import { useState } from "react";
import { Link } from "react-router-dom";

export default function TopNavLinks(props) {
  const [linkHover, setLinkHover] = useState(false);

  return (
    <>
      <Link
        to={props.linkTo}
        target={props.target}
        className="relative group border-3 border-palette2 hover:border-palette4 hover:bg-palette1 w-full"
        onMouseOver={() => setLinkHover(true)}
        onMouseOut={() => setLinkHover(false)}
      >
        {props.linkName}
        {props.subLink1 && linkHover && (
          <div
            onMouseOut={() => setLinkHover(false)}
            className="absolute top-full left-0 bg-palette2 border-3 border-palette4 w-full justify-center"
          >
            <div
              className={`${
                props.subLink2 ? "border-b-3 " : ""
              } border-palette4 hover:bg-palette1`}
            >
              <Link to={props.subLink1}>{props.subLinkName1}</Link> <br />
            </div>
            {props.subLink2 && (
              <div
                className={`${
                  props.subLink3 ? "border-b-3 " : ""
                } border-palette4 hover:bg-palette1`}
              >
                <Link to={props.subLink2}>{props.subLinkName2}</Link> <br />
              </div>
            )}

            {/* {props.subLink3 && (
              <div
                className={`${
                  props.subLink4 ? "border-b-3 " : ""
                } border-palette4 hover:bg-palette1`}
              >
                <Link to="/gtldr_v1/404">404</Link> <br />
              </div>
            )} */}
          </div>
        )}
      </Link>
    </>
  );
}
