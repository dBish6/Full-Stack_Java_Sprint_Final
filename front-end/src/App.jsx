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
import "./index.css";

// *Custom Hooks*
import useChangeTitle from "./hooks/useChangeTitle";

// *Components*
import Navigation from "./components/partials/Navigation";
import Footer from "./components/partials/Footer";

// *Pages/Views*
import Home from "./pages/Home";
import ProductHome from "./pages/ProductHome";
import About from "./pages/About";
import Support from "./pages/Support";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Profile from "./pages/Profile";
import Error404 from "./pages/errors/Error404";
import Error401 from "./pages/errors/Error401";
import Error500 from "./pages/errors/Error500";

function App() {
  global.DEBUG = true;

  const ShowFooter = () => (
    <>
      <Navigation />
      {/* Nested routes render out here. */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ShowFooter />}>
            <Route
              path="/user/profile"
              // element={!window.localStorage.getItem("USER_STATUS") ? <Navigate to={<Login />} : <Profile />}
              element={<Profile />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/home/swords" element={<ProductHome />} />
            <Route path="/home/about" element={<About />} />
            <Route path="/home/support" element={<Support />} />

            <Route path="/error401" element={<Error401 />} />
            <Route path="/error404" element={<Error404 />} />
            <Route path="/error500" element={<Error500 />} />
            {/* <Route path="*" render={() => <Navigate to="/error404" />} /> */}
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
