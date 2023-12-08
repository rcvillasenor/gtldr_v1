import TopNav from "../General/Components/TopNav";
import TestText from "../General/Components/TestText";
import Footer from "../General/Components/Footer";
import Header from "../General/Components/Header";
import ButtonTray from "./Components/ButtonTray";

export default function Dendro() {
  return (
    <>
      <TopNav />
      <Header
        name="Dendro Reactions"
        headerColor="bg-dendro"
        borderColor="border-dendro"
        textColor="text-white"
      />
      <div className="rounded-2xl border-white border-solid">
        <ButtonTray />
      </div>
      {/* <TestText name="Dendro Reactions" /> */}
      <Footer />
    </>
  );
}
