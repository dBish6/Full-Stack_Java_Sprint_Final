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
import useAuth from "./features/authentication/hooks/context/UseAuth";

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

import Administration from "./pages/Administration";
import SuccessfullyDeleted from "./features/admin/pages/SuccessfullyDeleted";
import SuccessfullyPatched from "./features/admin/pages/SuccessfullyPatched";
import SuccessfullyPosted from "./features/admin/pages/SuccessfullyPosted";
import Create from "./features/admin/pages/Create";

import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Profile from "./pages/Profile";

import Cart from "./pages/shoppingCart/Cart";

import Error404 from "./pages/errors/Error404";
import Error401 from "./pages/errors/Error401";
import Error500 from "./pages/errors/Error500";

global.DEBUG = true;

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

  // const AuthGate = ({ children }) => {
  //   const { userAuth } = useAuth();
  //   return userAuth === true ? children : <Navigate to="/login" replace />;
  // };

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<ShowFooter />}>
            <Route
              path="/user/profile"
              // element={!window.localStorage.getItem("USER_STATUS") ? <Navigate to={<Login />} : <Profile />}
              element={
                // <AuthGate>
                <Profile />
                // </AuthGate>
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/home/longSwords" element={<LongSwords />} />
            <Route path="/home/shortSwords" element={<ShortSwordsDaggers />} />
            <Route path="/home/daggers" element={<Daggers />} />
            <Route path="/home/maces" element={<Maces />} />
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
          <Route path="/admin/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
