import React from "react";
import { useGlobalContext } from "../context";
import Product from "./Product";

const Electronics = () => {
  const { eletronicProducts } = useGlobalContext();
  return (
    <section className="products-heading">
      <h1>Electronics Collection</h1>
      <Product storeProducts={eletronicProducts} />
    </section>
  );
};

export default Electronics;
