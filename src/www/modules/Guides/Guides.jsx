import TopNav from "../General/Components/TopNav.jsx";

import { Link } from "react-router-dom";

export default function Guides() {
    return (
        <>
            <TopNav />
            <div>Guides Page</div>
            <nav>
                <Link to="/gtldr_v1/">Home</Link>
                {" | "}
                <Link to="/gtldr_v1/guides/dendro">Dendro</Link>
            </nav>
        </>
    ); 
}