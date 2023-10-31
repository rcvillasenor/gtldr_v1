import React from "react";
import ReactDOM from "react-dom/client";

// Routes
import Home from "./www/modules/Home/Home.jsx";
import Guides from "./www/modules/Guides/Guides.jsx";
import Dendro from "./www/modules/Guides/Dendro.jsx";


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
