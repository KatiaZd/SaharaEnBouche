import {
  getProductsByCategory,
  getProductsFilter,
} from "../../service/products/products.sevice";
import ProductCard from "../productCard/ProductCard";
import Styles from "./ProductsCategories.module.css";
interface IProductCategorie {
  category?: string;
  id?: string;
  tag: string;
}

const ProductsCategories = (props: IProductCategorie) => {
  const { category, id, tag } = props;

  const ProductsCategory = getProductsByCategory(category);

  let filterTags: string[] = [];
  const filter: any = () => {
    if (tag != "") {
      filterTags = tag.split(",");
      let myIndex = filterTags.indexOf("");
      filterTags.splice(myIndex, 1);

      const ProductsFilterTags = getProductsFilter(filterTags);

      let productsFilter: any = [];
      if (ProductsFilterTags != undefined) {
        filterTags.forEach((element: string) => {
          let tata = ProductsFilterTags.filter(
            (product: any) => product?.filter === element
          );

          productsFilter[element] = tata;
        });
      }
      return productsFilter;
    }
  };
  let ProductsFilter: any = filter();

  if (filterTags.length == 0) {
    return (
      <section
        className={ProductsCategory.length == 0 ? Styles.display_none : ""}
      >
        <h2 id={id}>{ProductsCategory.length != 0 && category}</h2>
        <div className={Styles.products_categorie_container}>
          {ProductsCategory.map((product) => (
            <ProductCard
              key={product.id}
              identifiantProduct={product.id}
              title={product.title}
              img={product.picture}
              price={product.price}
              filter={product.filter}
            ></ProductCard>
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <>
        <section>
          {Object.keys(ProductsFilter).map((item, i) => (
            <div
              className={
                ProductsFilter[item].length != 0
                  ? Styles.filter_container
                  : Styles.display_none
              }
              key={i}
            >
              <h2>{ProductsFilter[item].length != 0 && item}</h2>
              <div className={Styles.products_categorie_container}>
                {ProductsFilter[item].map((product: any) => (
                  <ProductCard
                    key={ProductsFilter[item].indexOf(product)}
                    title={product.title}
                    img={product.picture}
                    price={product.price}
                    filter={product.filter}
                    identifiantProduct={product.id}
                  ></ProductCard>
                ))}
              </div>
            </div>
          ))}
        </section>
      </>
    );
  }
};
export default ProductsCategories;
