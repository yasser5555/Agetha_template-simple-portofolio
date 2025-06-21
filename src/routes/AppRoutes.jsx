import React from "react";
// step-1:Importing from React-router-dom
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Services from "../pages/Services/Services";

// ! Step-2:Create variables to contain Routes
const Navigators = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Route>
  )
);
// ? Step-3: Render-them
export default function AppRoutes() {
  return <RouterProvider router={Navigators} />;
}
