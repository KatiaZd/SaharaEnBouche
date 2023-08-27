import Button from "../component/Button/Button";
import BackButton from "../component/BackButton/BackButton";
import SelectQuantityProduct from "../component/SelectQuantityProduct/SelectQuantityProduct";
import style from "./Product.module.css";
import ProductDetail from "../component/ProductDetail/ProductDtail";
import { IProduct } from "mocks/products.mock";
import { useLoaderData } from "react-router-dom";
import { ActionFunctionArgs } from "react-router-dom";
import { getProductById } from "../service/products/products.sevice";
import { useCartContext } from "../component/Contexts/Cart.context";
import { useState } from "react";

export const productLoader = (args: ActionFunctionArgs) => {
  const { params } = args;
  const { id } = params;

  const productId = Number(id);
  const product = getProductById(productId);
  if (!product) {
    throw new Response("", {
      status: 404,
      statusText: "le produit n'existe pas ",
    });
  }
  return product;
};

const Product = () => {
  const [selectQuantity, setData] = useState(0);

  const selectQuantityToProductComponent = (childdata: any) => {
    setData(childdata);
  };

  let product = useLoaderData() as IProduct;

  const [productPersonaliser, setProductPersonaliser] = useState(product);

  const detailProductToPageProduct = (childdata: IProduct) => {
    setProductPersonaliser(childdata);
  };

  const { addProductToCart } = useCartContext();

  return (
    <>
      <main>
        <BackButton />
        <ProductDetail
          product={product}
          detailProductToPageProduct={detailProductToPageProduct}
        />

        <div className={style.containerButton}>
          <SelectQuantityProduct
            product={product}
            selectQuantityToProductComponent={selectQuantityToProductComponent}
          />
          <Button
            title="Ajouter au panier"
            callback={() =>
              addProductToCart(productPersonaliser, selectQuantity)
            }
          />
        </div>
      </main>
    </>
  );
};
export default Product;
