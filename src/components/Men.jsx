import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import Product from "./Product";

const Men = () => {
  const { handleMenPage, menProducts } = useGlobalContext();

  useEffect(() => {
    handleMenPage();
  }, []);
  return (
    <section className="products-heading">
      <h1>men Collection</h1>
      <Product storeProducts={menProducts} />
    </section>
  );
};

export default Men;
