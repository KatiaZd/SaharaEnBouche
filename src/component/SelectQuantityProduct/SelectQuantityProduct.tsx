import { useState } from "react";
import style from "./SelectQuantityProduct.module.css";
const SelectQuantityProduct = () => {
  const [selectedOption, setSelectOption] = useState(undefined);

  const handleSelectChange = (event: any) => {
    setSelectOption(event.target.value);
  };
  console.log("SelectOption", selectedOption);
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
