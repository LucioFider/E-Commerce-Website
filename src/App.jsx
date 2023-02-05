import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  Cart,
  Auth,
  Checkout,
  Error,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";

import styled from "styled-components";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<Home />} />)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
