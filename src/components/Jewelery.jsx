import React from "react";
import { useGlobalContext } from "../context";
import Product from "./Product";

const Jewelery = () => {
  const { jeweleryProducts } = useGlobalContext();

  return (
    <section className="products-heading">
      <h1>Jewelries Collection</h1>
      <Product storeProducts={jeweleryProducts} />
    </section>
  );
};

export default Jewelery;
