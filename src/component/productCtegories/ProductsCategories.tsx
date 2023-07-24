import { getProductsByCategory } from "../../service/products/products.sevice";
import ProductCard from "../productCard/ProductCard";
import Styles from "./ProductsCategories.module.css";
interface IProductCategorie {
  category: string;
}

const ProductsCategories = (props: IProductCategorie) => {
  const { category } = props;

  const ProductsCategory = getProductsByCategory(category);
  console.log("ProductsCategory", ProductsCategory);
  return (
    <section
      className={ProductsCategory.length == 0 ? Styles.display_none : ""}
    >
      <h2>{ProductsCategory.length != 0 && category}</h2>
      <div className={Styles.products_categorie_container}>
        {ProductsCategory.map((product) => (
          <ProductCard
            title={product.title}
            img={product.picture}
            price={product.price}
            filter={product.filter}
          ></ProductCard>
        ))}
      </div>
    </section>
  );
};
export default ProductsCategories;
