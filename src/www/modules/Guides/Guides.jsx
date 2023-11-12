import Footer from "../General/Components/Footer.jsx";
import Header from "../General/Components/Header.jsx";
import TestText from "../General/Components/TestText.jsx";
import TopNav from "../General/Components/TopNav.jsx";

import { Link } from "react-router-dom";

export default function Guides() {
    return (
        <>
            <TopNav />
            <Header name="Mechanics Guides" headerColor="bg-palette8" borderColor="border-palette8" textColor="text-white"/>
            <TestText name="Guides Base" />
            <Footer />
        </>
    ); 
}