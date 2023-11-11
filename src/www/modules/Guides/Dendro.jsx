import TopNav from "../General/Components/TopNav";
import TestText from "../General/Components/TestText";
import Footer from "../General/Components/Footer";
import Header from "../General/Components/Header";
import InfoCard from "./Components/InfoCard";

export default function Dendro() {
  return (
    <>
      <TopNav />
      <Header name="Dendro Reactions" headerColor="bg-dendro" borderColor="border-dendro" textColor="text-white"/>
      <InfoCard />
      
      <TestText name="Dendro Reactions" />
      <Footer />
    </>
  );
}
