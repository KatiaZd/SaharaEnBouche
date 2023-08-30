import { useState, useEffect } from "react";
import style from "./SelectQuantityProduct.module.css";
import { IProduct } from "mocks/products.mock";
import { useCartContext } from "../../component/Contexts/Cart.context";

interface IP {
  product: IProduct;
  selectQuantityToProductComponent: any;
}
const SelectQuantityProduct = (props: IP) => {
  let { product, selectQuantityToProductComponent } = props;

  const { changeQuantityOfProductCart, products } = useCartContext();

  const getQuantityProductCart = () => {
    let quantity = 0;
    products.forEach((ele) => {
      if (ele.product.id == product.id) {
        quantity = ele.quantity;
      }
    });
    return quantity;
  };

  let quantityProductInCart = getQuantityProductCart();
  const [selectedOption, setSelectOption] = useState(quantityProductInCart);

  const handleSelectChange = (event: any) => {
    setSelectOption(event.target.value);
  };
  useEffect(() => {
    selectQuantityToProductComponent(selectedOption);
    changeQuantityOfProductCart(products, product.id, selectedOption);
  }, [selectedOption]);

  return (
    <>
      <select
        value={selectedOption}
        className={style.select}
        onChange={handleSelectChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </>
  );
};
export default SelectQuantityProduct;
