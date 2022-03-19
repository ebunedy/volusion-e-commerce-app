import React from "react";
import { useGlobalContext } from "../context";
import Product from "./Product";

const Women = () => {
  const { womenProducts } = useGlobalContext();
  return (
    <section className="products-heading">
      <h1>Jeweleries Collection</h1>
      <Product storeProducts={womenProducts} />
    </section>
  );
};

export default Women;
