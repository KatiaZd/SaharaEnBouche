import { IProduct } from "mocks/products.mock";

import Styles from "./ProductDetail.module.css";
import PersonalizationProduct from "../PersonalizationProduct/PersonalizationProduct";
import { useEffect, useState } from "react";

interface IProductDetails {
  product: IProduct;
  detailProductToPageProduct: (productPersonaliser: IProduct) => void;
}
const ProductDetail = (props: IProductDetails) => {
  const { product, detailProductToPageProduct } = props;

  const [productPersonaliser, setData] = useState<IProduct>(product);

  const PersonalizationProductToProductDetail = (
    productPersonaliser: IProduct
  ) => {
    setData(productPersonaliser);
  };
  useEffect(() => {
    detailProductToPageProduct(productPersonaliser);
  }, [productPersonaliser]);

  return (
    <>
      <div className={Styles.productDetail_container}>
        <div className={Styles.img_productDetail_container}>
          <img
            className={Styles.img_productDetail}
            src={"/" + product.picture}
            alt=""
          />
        </div>
        <div className={Styles.description_container}>
          <div>
            <h2 className={Styles.h2}>
              {product.title}{" "}
              {product.filter === "vegetarien" && (
                <img src="/assets/img/vage-removebg-preview 3.png" />
              )}
            </h2>
            <p>{product.price}€</p>
            <p>{product.description}</p>
          </div>
          <PersonalizationProduct
            product={product}
            PersonalizationProductToProductDetail={
              PersonalizationProductToProductDetail
            }
          />
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
