import React from "react";
import { useGlobalContext } from "../context";
import Product from "./Product";

const Men = () => {
  const { menProducts } = useGlobalContext();
  return (
    <section className="products-heading">
      <h1>men Collection</h1>
      <Product storeProducts={menProducts} />
    </section>
  );
};

export default Men;
