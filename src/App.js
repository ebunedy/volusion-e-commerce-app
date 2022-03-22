import React from "react";
import { Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import CartItems from "./components/CartItems";
import Collections from "./components/Collections";
import Men from "./components/Men";
import Women from "./components/Women";
import Jewelery from "./components/Jewelery";
import Electronics from "./components/Electronics";
import DefaultPage from "./components/DefaultPage";

const App = () => {
  return (
    <main className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Collections />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/details/" element={<ProductDetails />} />
        <Route path="*" element={<DefaultPage />} />
      </Routes>
      <CartItems />
    </main>
  );
};

export default App;
