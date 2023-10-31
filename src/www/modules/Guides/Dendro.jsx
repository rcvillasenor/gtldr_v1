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
        </>
    ); 
}