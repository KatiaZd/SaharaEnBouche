import { PRODUCTS } from "../../mocks/products.mock";

export const getProducts = () => {
  return PRODUCTS;
};
export const getProductById = (id: number) => {
  return PRODUCTS.find((product) => product.id === id);
};
export const getProductsByCategory = (category: string | undefined) => {
  const productsCtegory = PRODUCTS.filter(
    (product) => product.category === category
  );
  return productsCtegory;
};

export const getProductsByFilter = (filter: string) => {
  const productsFilter = PRODUCTS.filter(
    (product) => product.filter === filter
  );
  return productsFilter;
};

export const getProductsFilter = (filterTag: string[]) => {
  if (filterTag.length != 0) {
    const productFilter = PRODUCTS.filter((product) =>
      filterTag.some((filterselect: string) =>
        product.filter.includes(filterselect)
      )
    );

    return productFilter;
  } else {
    return PRODUCTS;
  }
};
