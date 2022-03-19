import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Product from "./Product";

const Electronics = () => {
  const { handleEletronicPage, eletronicProducts } = useGlobalContext();

  useEffect(() => {
    handleEletronicPage();
  }, []);
  return (
    <section className="products-heading">
      <h1>Electronics Collection</h1>
      <Product storeProducts={eletronicProducts} />
    </section>
  );
};

export default Electronics;
