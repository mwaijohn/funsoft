import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PageRoutes from "./components/PageRoutes";

export default function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  )
}
