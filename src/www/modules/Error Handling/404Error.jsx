import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <h1>oops message here</h1>
      <h2>404 - Page Not Found</h2>
      <div>explanation goes here</div>
      <Link to="/gtldr_v1">
        <div className="border rounded-3xl">
          consider doing a button component but this should link back to home
        </div>
      </Link>
    </>
  );
}
