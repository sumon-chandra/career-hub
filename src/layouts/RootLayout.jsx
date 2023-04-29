import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="px-2 lg:px-32">
        <Outlet />
      </main>
      <footer className=" py-6  px-2 footer footer-center bg-bgSecondary text-primary-content">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
