import { Link } from "react-router-dom";

export default function Dendro() {
  return (
    <>
      <div>Dendro Page</div>
      <nav>
        <Link to="/gtldr_v1/guides">Guides</Link>
        {" | "}
        <Link to="/gtldr_v1/">Home</Link>
      </nav>
      <h1>Dendro Reactions:</h1>
      <p>
        <ul>
          <li>Bloom</li>
          <p>
            Exploring Bloom:
            <ul>
              <li>Hyper Bloom</li>
              <li>Burgeon</li>
            </ul>
          </p>
          <li>Quicken</li>
          <p>
            Exploring Quicken:
            <ul>
              <li>Aggravate</li>
              <li>Spread</li>
            </ul>
          </p>
        </ul>
      </p>
    </>
  );
}
