import TopNav from "../General/Components/TopNav";
import Header from "../General/Components/Header";
import TestText from "../General/Components/TestText";
import Footer from "../General/Components/Footer";

export default function EGT() {
  return (
    <>
      <TopNav />
      <Header
        name="Elemental Gauge Theory"
        headerColor="bg-hydro"
        borderColor="border-hydro"
        textColor="white"
      />
      <TestText name="Elemental Gauge Theory" />
      <Footer />
    </>
  );
}
