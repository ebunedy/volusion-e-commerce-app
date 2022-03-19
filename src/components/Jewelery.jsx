import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Product from "./Product";

const Jewelery = () => {
  const { handleJeweleryPage, jeweleryProducts } = useGlobalContext();

  useEffect(() => {
    handleJeweleryPage();
  }, []);
  return (
    <section className="products-heading">
      <h1>Jeweleries Collection</h1>
      <Product storeProducts={jeweleryProducts} />
    </section>
  );
};

export default Jewelery;
