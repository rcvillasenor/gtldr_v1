import TopNav from "../General/Components/TopNav";
import TestText from "../General/Components/TestText";
import Footer from "../General/Components/Footer";
import Header from "../General/Components/Header";

export default function EnergyRequirements() {
  return (
    <>
      <TopNav />
      <Header name="Energy Requirements" headerColor="bg-palette8" borderColor="border-palette8" textColor="text-white"/>
      <div>
        <div>
          Same Element -<div>Caught:</div>
          3
          <div>Not Caught:</div>
          1.8
        </div>
        <div>
          Different Element -<div>Caught:</div>1<div>Not Caught:</div>0.6
        </div>
        <div>
          Clear/White -<div>Caught:</div>2<div>Not Caught:</div>1.2
        </div>
      </div>
      <TestText name="Energy Requirements" />
      <Footer />
    </>
  );
}
