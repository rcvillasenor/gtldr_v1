import TopNav from "../General/Components/TopNav";
import Header from "../General/Components/Header";
import TestText from "../General/Components/TestText";
import Footer from "../General/Components/Footer";

export default function CharTLDRs() {
  return (
    <>
      <TopNav />
      <Header
        name="Characters TL;DRs"
        headerColor="bg-hydro"
        borderColor="border-hydro"
        textColor="white"
      />
      <TestText name="Character TL;DRs" />
      <Footer />
    </>
  );
}
