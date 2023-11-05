import Footer from "../General/Components/Footer.jsx";
import TestText from "../General/Components/TestText.jsx";
import TopNav from "../General/Components/TopNav.jsx";

import { Link } from "react-router-dom";

export default function Guides() {
    return (
        <>
            <TopNav />
            <TestText name="Guides Base" />
            <Footer />
        </>
    ); 
}