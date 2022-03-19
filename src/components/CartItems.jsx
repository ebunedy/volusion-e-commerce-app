import React from "react";
import { useGlobalContext } from "../context";

const CartItems = () => {
  const { showcart, cartItems, removeItem, toggleCount, total } =
    useGlobalContext();
  return (
    <section
      className={`cart-items-container ${
        showcart ? "open-cart" : "close-cart"
      }`}
    >
      <h3>Cart</h3>
      {cartItems.length <= 0 ? (
        <span className="empty-cart">Empty cart</span>
      ) : (
        cartItems.map((item) => {
          const { id, title, count, total, price, image } = item;
          return (
            <div className="cart-tems flex" key={id}>
              <img src={image} alt="thumbnail" className="cart-item-image" />
              <div>
                <span className="cart-label">{title}</span>
                <div className="cart-items-price-container flex">
                  <span className="cart-items-price">
                    ${price} x {count}
                  </span>
                  <span className="cart-item-amount">
                    ${(price * count).toFixed(1)}
                  </span>
                  <span className="increment-decrement cart-icrement-button flex">
                    <span className="minus">
                      <img
                        src="images/icon-minus.svg"
                        alt=""
                        onClick={() => toggleCount(id, "dec")}
                      />
                    </span>
                    <span className="value">{count}</span>
                    <span className="plus">
                      <img
                        src="images/icon-plus.svg"
                        alt=""
                        onClick={() => toggleCount(id, "inc")}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <img
                src="images/icon-delete.svg"
                alt=""
                className="cart-item-delete"
                onClick={() => removeItem(id)}
              />
            </div>
          );
        })
      )}
      <h2 ><span>Total:</span> <span>{total}</span></h2>
      <button className="checkout-button">checkout</button>
    </section>
  );
};

export default CartItems;
