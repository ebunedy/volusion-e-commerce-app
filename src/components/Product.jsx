import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Product = ({ storeProducts }) => {
  const { handleDetailPage, addToCart } = useGlobalContext();
  return (
    <div className="products-container flex">
      {storeProducts.map((product) => {
        const { id, title, discount, price, image, inCart } = product;
        const calculatedprice = 100 / (100 - discount);
        return (
          <div className="products" key={id}>
            <Link to="/details">
              <img
                src={image}
                alt=""
                className="product-img"
                onClick={() => handleDetailPage(id)}
              />
            </Link>

            <div className="product-subcontent">
              <h4>{title}</h4>
              <p className="price-discount-container flex">
                <span className="price">${price.toFixed(1)}</span>
                <span className="discount">{discount}%</span>
                <span className="original-price">
                  {(price * calculatedprice).toFixed(1)}
                </span>
              </p>
              <button
                disabled={inCart}
                className="checkout-button"
                onClick={() => addToCart(id)}
              >
                {inCart ? <span>In Cart</span> : <span>Add to Cart</span>}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
