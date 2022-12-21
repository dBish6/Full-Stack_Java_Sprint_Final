/* App.jsx

   Author: David Bishop
   Contributors: Chris Doucette, Dominic Whelan and Blake Waddleton
   Creation Date: December 6, 2022
*/

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";

// *Design Imports*
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

// *Custom Hooks*
import useChangeTitle from "./hooks/useChangeTitle";

// *Component Imports*
import Navigation from "./components/partials/Navigation";
import Footer from "./components/partials/Footer";

// *Pages/Views*
import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Support from "./pages/home/Support";
import LongSwords from "./pages/home/LongSwords";
import ShortSwordsDaggers from "./pages/home/ShortSwords";
import Daggers from "./pages/home/Daggers";
import Maces from "./pages/home/Maces";
import Search from "./pages/home/Search";

import Administration from "./pages/Administration";
import SuccessfullyDeleted from "./features/admin/pages/SuccessfullyDeleted";
import SuccessfullyPatched from "./features/admin/pages/SuccessfullyPatched";
import SuccessfullyPosted from "./features/admin/pages/SuccessfullyPosted";
import SuccessfullyPutted from "./features/admin/pages/SuccessfullyPutted";
import Create from "./features/admin/pages/Create";
import Replace from "./features/admin/pages/Replace";

import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";

import Cart from "./pages/shoppingCart/Cart";
import OrderReceived from "./features/shoppingCart/pages/OrderReceived";

import Error404 from "./pages/errors/Error404";
import Error401 from "./pages/errors/Error401";
import Error500 from "./pages/errors/Error500";

function App() {
  const ShowFooter = () => (
    <>
      <Navigation />
      {/* Nested routes render out here. */}
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/order" element={<OrderReceived />} />
          <Route element={<ShowFooter />}>
            <Route path="/home" element={<Home />} />
            <Route path="/home/longSwords" element={<LongSwords />} />
            <Route path="/home/shortSwords" element={<ShortSwordsDaggers />} />
            <Route path="/home/daggers" element={<Daggers />} />
            <Route path="/home/maces" element={<Maces />} />
            <Route path="/home/search" element={<Search />} />
            <Route path="/home/about" element={<About />} />
            <Route path="/home/support" element={<Support />} />

            <Route path="/error401" element={<Error401 />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="/error500" element={<Error500 />} />
            {/* <Route path="*" render={() => <Navigate to="/error404" />} /> */}
            <Route path="*" element={<Error404 />} />
          </Route>
          <Route path="/admin" element={<Administration />} />
          <Route
            path="/admin/successfulDelete"
            element={<SuccessfullyDeleted />}
          />
          <Route
            path="/admin/successfulPatch"
            element={<SuccessfullyPatched />}
          />
          <Route
            path="/admin/successfulPost"
            element={<SuccessfullyPosted />}
          />
          <Route path="/admin/successfulPut" element={<SuccessfullyPutted />} />
          <Route path="/admin/create" element={<Create />} />
          <Route path="/admin/replace" element={<Replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
