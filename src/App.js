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
import About from "./components/About";

const App = () => {
  return (
    <main className="container">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Collections />} />
        <Route exact path="/men" element={<Men />} />
        <Route exact path="/women" element={<Women />} />
        <Route exact path="/jewelery" element={<Jewelery />} />
        <Route exact path="/electronics" element={<Electronics />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/details/" element={<ProductDetails />} />
      </Routes>
      <CartItems />
    </main>
  );
};

export default App;
