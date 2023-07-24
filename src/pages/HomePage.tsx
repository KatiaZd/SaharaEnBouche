import ProductsCategories from "../component/productCtegories/ProductsCategories";

const HomePage = () => {
  const categories = ["entrées", "plats", "grillades", "desserts", "boissons"];
  return (
    <main>
      {categories.map((cate) => (
        <ProductsCategories category={cate}></ProductsCategories>
      ))}
    </main>
  );
};
export default HomePage;
