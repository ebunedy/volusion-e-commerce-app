const reducer = (state, action) => {
  if (action.type === "DETAIL_PAGE") {
    const detailPage = state.storeProducts.find(
      (item) => item.id === action.payload
    );
    return { ...state, productDetail: detailPage };
  }
  if (action.type === "ELECTRONIC_PAGE") {
    const eletronic = state.storeProducts.filter(
      (item) => item.category === "electronics"
    );
    return { ...state, eletronicProducts: eletronic };
  }

  if (action.type === "JEWELERY_PAGE") {
    const jewelery = state.storeProducts.filter(
      (item) => item.category === "jewelery"
    );
    return { ...state, jeweleryProducts: jewelery };
  }
  if (action.type === "MEN_PAGE") {
    const menPage = state.storeProducts.filter(
      (item) => item.category === "men's clothing"
    );
    return { ...state, menProducts: menPage };
  }

  if (action.type === "WOMEN_PAGE") {
    const womenPage = state.storeProducts.filter(
      (item) => item.category === "women's clothing"
    );
    return { ...state, womenProducts: womenPage };
  }
  if (action.type === "ADD_ITEM_TO_CART") {
    const cartItem = state.storeProducts.find(
      (item) => item.id === action.payload
    );
    cartItem.count = 1;
    cartItem.inCart = true;
    return { ...state, cartItems: [...state.cartItems, cartItem] };
  }
  if (action.type === "REMOVE_ITEM") {
    const newCart = state.cartItems
      .map((item) => {
        if (item.id === action.payload) {
          item.inCart = false;
        }
        return item;
      })
      .filter((item) => item.inCart === true);
    return { ...state, cartItems: newCart };
  }
  if (action.type === "TOGGLE_COUNT") {
    const newCart = state.cartItems
      .map((item) => {
        if (item.id === action.payload.id) {
          if (action.payload.type === "inc") {
            item.count = item.count + 1;
          }
          if (action.payload.type === "dec") {
            if (item.count > 1) {
              item.count = item.count - 1;
            }
          }
        }
        return item;
      })
      .filter((item) => {
        return item.count >= 1;
      });
    return { ...state, cartItems: newCart };
  }
  if (action.type === "GET_TOTAL") {
    const newCart = state.cartItems;
    if (newCart.length > 0) {
      const { total } = newCart.reduce(
        (cartTotal, cartItem) => {
          const { price, count } = cartItem;
          const totalAmount = price * count;
          cartTotal.total += totalAmount;
          return cartTotal;
        },
        { total: 0 }
      );
      return { ...state, total: total.toFixed(2) };
    }
    return { ...state, total: 0 };
  }
};
export default reducer;
