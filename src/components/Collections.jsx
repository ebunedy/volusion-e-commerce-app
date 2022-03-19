import React from "react";
import Product from "./Product";
import { useGlobalContext } from "../context";

const Collections = () => {
  const { storeProducts } = useGlobalContext();
  return (
    <section className="products-heading">
      <h1>volusion Collection</h1>
      <Product storeProducts={storeProducts} />
    </section>
  );
};

export default Collections;
