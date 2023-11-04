import { Link, useRouteError } from "react-router-dom";
import "../../../index.css";

export default function Error404() {
  let error = useRouteError();
  console.error(error);
  return (
    <div className="logo-font text-center absolute border-4 p-12 w-1/2 top-1/4 left-1/4 text-palette4 shadow-2xl">
      <h1 className="text-6xl">Aw, nuts, 404 Error:</h1>
      <h2 className="text-2xl py-2 text-palette6">
        We couldn't find the page requested.
      </h2>
      <div className="pb-10 text-palette5">
        But don't worry, it's probably hanging out with Waldo. In the meantime,
        check out our home page.
      </div>
      <Link
        to="/gtldr_v1/"
        className="border bg-palette2 rounded-3xl px-4 py-2 hover:bg-palette1 hover:text-palette2 shadow-lg"
      >
        Take Me There
      </Link>
    </div>
  );
}
