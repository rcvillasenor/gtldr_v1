import TopNav from "../General/Components/TopNav";
import TestText from "../General/Components/TestText";
import Footer from "../General/Components/Footer";
import Header from "../General/Components/Header";

export default function Dendro() {
  return (
    <>
      <TopNav />
      <Header name="Dendro Reactions" />
      <div className="my-3 mx-3 w-max">
        <p className="text-center">
          <div>
            <h1>ELECTRO</h1>
            <div>
              <h2>SECONDARY APPLICATION</h2>
              <div>Electro: Aggravate</div>
              <div>Dendro: Spread</div>
            </div>
          </div>
          <div>
            <h1>HYDRO</h1>
            <div>
              <h2>SECONDARY APPLICATION</h2>
              <div>Electro: Hyperbloom</div>
              <div>Pyro: Burgeon</div>
            </div>
          </div>
          <div>
            <h1>PYRO</h1>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <h1>OTHER</h1>
            <div>ANEMO</div>
            <div>CRYO</div>
            <div>GEO</div>
          </div>
        </p>
      </div>
      <TestText name="Dendro Reactions" />
      <Footer />
    </>
  );
}
