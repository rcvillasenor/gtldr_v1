import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div>Home Page</div>
            <nav>
                <Link to="/gtldr_v1/guides">Guides</Link>
                {" | "}
                <Link to="/gtldr_v1/guides/dendro">Dendro</Link>
            </nav>
        </>
    ); 
}