import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import DetailsProdect from "./components/pages/DetailsProdect.jsx";
import SingIn from "./components/pages/SingIn.jsx";
import SingUp from "./components/pages/SingUp.jsx";
import Prodect from "./components/pages/Prodect.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product/:id" element={<DetailsProdect />} />
        <Route path="/SingIn" element={<SingIn />} />
        <Route path="/SingUp" element={<SingUp />} />
        <Route path="/Prodect" element={<Prodect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
