import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

// Routes
import Home from "./www/modules/Home/Home.jsx";
import Guides from "./www/modules/Guides/Guides.jsx";
import Dendro from "./www/modules/Guides/Dendro.jsx";
import FurinaHealTier from "./www/modules/Quick References/FurinaHealersTierList";
import Test from "./www/modules/General/Components/Test.jsx";
import References from "./www/modules/Quick References/References.jsx";
import Support from "./www/modules/Support/Support.jsx";
import About from "./www/modules/About/About.jsx";
import FAQs from "./www/modules/FAQs/FAQs.jsx";
import Contact from "./www/modules/Contact/Contact.jsx";
import Error404 from "./www/modules/Error Handling/404Error.jsx";

import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";


const routeElements = (
  <Route path="/gtldr_v1/">
    <Route index element={<Home />} errorElement={<Error404 />} />
    <Route path="/gtldr_v1/about" element={<About />} errorElement={<Error404 />} />
    <Route path="/gtldr_v1/contact" element={<Contact />} errorElement={<Error404 />} />
    <Route path="/gtldr_v1/faqs" element={<FAQs />} errorElement={<Error404 />} />
    <Route path="/gtldr_v1/guides" element={<Guides />} errorElement={<Error404 />} />
    <Route path="/gtldr_v1/guides/dendro" element={<Dendro />} errorElement={<Error404 />} />
    <Route path="/gtldr_v1/guides/furina-healer-tier-list" element={<FurinaHealTier />} errorElement={<Error404 />} />
    <Route path="/gtldr_v1/references" element={<References />} errorElement={<Error404 />} />
    <Route path="/gtldr_v1/support" element={<Support />} errorElement={<Error404 />} />
    <Route path="/gtldr_v1/test" element={<Test />} errorElement={<Error404 />} />
    <Route path="/gtldr_v1/*" element={<Error404 />} />
  </Route>
);

const router = createBrowserRouter(createRoutesFromElements(routeElements));

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
