import TopNav from "../General/Components/TopNav";
import TestText from "../General/Components/TestText";
import Footer from "../General/Components/Footer";

export default function Dendro() {
  return (
    <>
      <TopNav />
      <div className="my-3 mx-3 w-max">
        <h1 className="text-6xl text-center">Dendro Reactions:</h1>
        <p className="text-center">
          <ul>
            <li>Bloom</li>
            <p>
              Exploring Bloom:
              <ul>
                <li>Hyper Bloom</li>
                <li>Burgeon</li>
              </ul>
            </p>
            <li>Quicken</li>
            <p>
              Exploring Quicken:
              <ul>
                <li>Aggravate</li>
                <li>Spread</li>
              </ul>
            </p>
          </ul>
        </p>
      </div>
      <TestText name="Dendro Reactions" />
      <Footer />
    </>
  );
}
