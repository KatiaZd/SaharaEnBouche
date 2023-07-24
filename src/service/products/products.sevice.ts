import { PRODUCTS } from "../../mocks/products.mock";

export const getProducts = () => {
  return PRODUCTS;
};
export const getProductsByCategory = (category: string) => {
  const productsCtegory = PRODUCTS.filter(
    (product) => product.category === category
  );
  return productsCtegory;
};
