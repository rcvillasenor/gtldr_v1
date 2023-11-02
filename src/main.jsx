import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

// Routes
import Home from "./www/modules/Home/Home.jsx";
import Guides from "./www/modules/Guides/Guides.jsx";
import Dendro from "./www/modules/Guides/Dendro.jsx";
import Test from "./www/modules/General/Components/Test.jsx";
import References from "/src/www/Modules/Quick References/References.jsx";


import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

const routeElements = (
  <Route path="/gtldr_v1/">
    <Route index element={<Home />} />
    <Route path="/gtldr_v1/guides" element={<Guides />} />
    <Route path="/gtldr_v1/guides/dendro" element={<Dendro />} />
    <Route path="/gtldr_v1/test" element={<Test />} />
    <Route path="/gtldr_v1/references" element={<References />} />
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
