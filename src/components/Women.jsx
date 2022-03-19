import React, {useEffect} from "react";
import { useGlobalContext } from "../context";
import Product from "./Product";

const Women = () => {
  const { handleWomenPage, womenProducts } = useGlobalContext();
  useEffect(() => {
    handleWomenPage();
  }, []);
  return (
    <section className="products-heading">
      <h1>Jeweleries Collection</h1>
      <Product storeProducts={womenProducts} />
    </section>
  );
};

export default Women;
