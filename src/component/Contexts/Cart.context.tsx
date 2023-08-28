import { IProduct } from "mocks/products.mock";
import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface ICartProduct {
  id: String;
  product: IProduct;
  quantity: number;
}

interface ICart {
  products: ICartProduct[];
  addProductToCart: (product: IProduct, quantity: number) => void;
  changeQuantityOfProductCart: (
    cartProducts: ICartProduct[],
    id: number,
    selectQuantity: number
  ) => void;
  getCartTotalProduct: () => number;
}
// panier initial
const defaultCart: ICart = {
  products: [],
  addProductToCart: (product: IProduct, quantity: number) => {},
  changeQuantityOfProductCart: (
    cartProducts: ICartProduct[],
    id: number,
    selectQuantity: number
  ) => {},
  getCartTotalProduct: (): number => {
    return Number(0);
  },
};

export const CartContext = createContext<ICart>(defaultCart);

interface CartProviderProps {
  children: JSX.Element;
}

export const CartProvider = (props: CartProviderProps) => {
  const { children } = props;

  const [cartProducts, setCartProducts] = useState<ICartProduct[]>(
    localStorage.getItem("cartProducts")
      ? JSON.parse(localStorage.getItem("cartProducts") as string)
      : []
  );

  const addProductToCart = (product: IProduct, quantity: number) => {
    const newCartProduct: ICartProduct = {
      id: uuidv4(),
      product,
      quantity,
    };

    const isProductInCart = cartProducts.find(
      (cartProduct) => cartProduct.product.id === newCartProduct.product.id
    );

    if (isProductInCart) {
      setCartProducts(
        cartProducts.map((cartProduct) =>
          cartProduct.product.id === newCartProduct.product.id
            ? { ...cartProduct, quantity: cartProduct.quantity }
            : cartProduct
        )
      );
    } else {
      quantity == 0 ? (newCartProduct.quantity = +1) : newCartProduct.quantity;
      setCartProducts([...cartProducts, newCartProduct]);
    }
  };

  const changeQuantityOfProductCart = (
    cartProducts: ICartProduct[],
    id: number,
    selectQuantity: number
  ) => {
    setCartProducts(
      cartProducts.map((cartProduct) =>
        cartProduct.product.id === id
          ? {
              ...cartProduct,
              quantity: Number(selectQuantity),
            }
          : cartProduct
      )
    );
  };

  const getCartTotalProduct = () => {
    return cartProducts.reduce(
      (total, cartProduct) =>
        total +
        Number(cartProduct.product.price) * Number(cartProduct.quantity),
      0
    ); // calculate the total price of the items in the cart
  };

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    const cartProducts = localStorage.getItem("cartProducts");
    if (cartProducts) {
      setCartProducts(JSON.parse(cartProducts));
    }
  }, []);

  const cart: ICart = {
    products: cartProducts,
    addProductToCart,
    changeQuantityOfProductCart,
    getCartTotalProduct,
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
