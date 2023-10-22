import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./components/Body";
// import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <>
      <Body />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/addproduct",
    element: <AddProduct />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<RouterProvider router={appRouter} />);
