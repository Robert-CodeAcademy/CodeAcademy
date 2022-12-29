import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";
import Cards from "./components/Cards";
import Category from "./components/Category";
import Product from "./components/Product";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Cards />
          </div>
        ),
      },
      { path: "/category/:category", element: <Category /> },
      { path: "/product/:product", element: <Product /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
