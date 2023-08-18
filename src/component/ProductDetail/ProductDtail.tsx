import { ActionFunctionArgs } from "react-router-dom";
import { getProductById } from "../../service/products/products.sevice";
import { IProduct } from "mocks/products.mock";
import { useLoaderData } from "react-router-dom";
import Styles from "./ProductDetail.module.css";

export const productLoader = (args: ActionFunctionArgs) => {
  const { params } = args;
  const { id } = params;
  console.log("id laoder", id);
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

const ProductDetail = () => {
  let product = useLoaderData() as IProduct;
  return (
    <div className={Styles.productDetail_container}>
      <div className={Styles.img_productDetail_container}>
        <img
          className={Styles.img_productDetail}
          src={"/" + product.picture}
          alt=""
        />
      </div>
      <div className={Styles.description_container}>
        <h2 className={Styles.h2}>
          {product.title}{" "}
          {product.filter === "vegetarien" && (
            <img src="/assets/img/vage-removebg-preview 3.png" />
          )}
        </h2>
        <p>{product.price}€</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};
export default ProductDetail;
