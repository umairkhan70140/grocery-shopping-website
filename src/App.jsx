import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Components/Layout";   
import Home from "./Components/Home/Home";
import Fruits from "./Components/Fruits";
import Seafood from "./Components/Seafood";
import Diray from "./Components/Diray";
import AllProducts from "./Components/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },          
      { path: "fruits", element: <Fruits /> },     
      { path: "seafood", element: <Seafood /> },
      { path: "diray", element: <Diray /> },
      { path: "allproducts", element: <AllProducts /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;