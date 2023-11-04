import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-palette2">
      <div className="flex flex-row mx-3">
        <div className="flex flex-col">
          <h1 className="py-3">Site Links</h1>
          <Link>Support</Link>
          <Link>About</Link>
          <Link>FAQs</Link>
          <Link></Link>
          keqingmains
        </div>
        <div className="">
          <h1 className="py-3">Other Tools</h1>
          <Link>Keqingmains</Link>
          <Link>Wiki</Link>
          <Link>Akasha</Link>
          <Link>Enka</Link>
        </div>
        <div className=""></div>
      </div>

      <div className="text-center">© 2023 Richard Villaseñor</div>
      <div className="text-center">
        © All rights reserved by Hoyoverse. Other properties belong to their
        respective owners.
      </div>
    </div>
  );
}
