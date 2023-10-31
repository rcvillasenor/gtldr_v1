import { Link } from "react-router-dom";

export default function Guides() {
    return (
        <>
            <div>Guides Page</div>
            <nav>
                <Link to="/gtldr_v1/">Home</Link>
                {" | "}
                <Link to="/gtldr_v1/guides/dendro">Dendro</Link>
            </nav>
        </>
    ); 
}