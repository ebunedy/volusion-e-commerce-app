import React, { useContext, useReducer, useState, useEffect } from "react";
import reducer from "./reducer";
import { PRODUCTS } from "./products";

const AppContext = React.createContext();

const defaultState = {
  storeProducts: PRODUCTS,
  productDetail: PRODUCTS[0],
  jeweleryProducts: [],
  menProducts: [],
  womenProducts: [],
  eletronicProducts: [],
  cartItems: [],
  total: 0,
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const [showcart, setShowcart] = useState(false);

  const showcartItems = () => {
    setShowcart(!showcart);
  };

  const handleDetailPage = (id) => {
    dispatch({ type: "DETAIL_PAGE", payload: id });
  };

  const handleEletronicPage = () => {
    dispatch({ type: "ELECTRONIC_PAGE" });
  };

  const handleJeweleryPage = () => {
    dispatch({ type: "JEWELERY_PAGE" });
  };

  const handleMenPage = () => {
    dispatch({ type: "MEN_PAGE" });
  };

  const handleWomenPage = () => {
    dispatch({ type: "WOMEN_PAGE" });
  };

  const addToCart = (id) => {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const toggleCount = (id, type) => {
    dispatch({ type: "TOGGLE_COUNT", payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cartItems]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        showcart,
        showcartItems,
        handleDetailPage,
        handleEletronicPage,
        handleJeweleryPage,
        handleMenPage,
        handleWomenPage,
        addToCart,
        removeItem,
        toggleCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { ProductProvider, useGlobalContext };
