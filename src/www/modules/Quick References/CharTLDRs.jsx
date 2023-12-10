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
      <div className="text-center items-center border-3 border-solid rounded-2xl mx-3 my-4" style={{height: "50rem"}}>Test space</div>
      <div className="text-center border-3 border-solid rounded-2xl mx-3 my-4 py-20">Test space</div>
      {/* <TestText name="Character TL;DRs" /> */}
      <Footer />
    </>
  );
}
