import Items from "./Items";
import ShopHeader from "./ShopHeader";
import { CartContextProvider } from "../../contexts/index.js";
import { useState } from "react";
// import mockData from '../../assets/MOCK_DATA.json'


const Shop = () => {
  const [items,setItems] = useState([])

  const removeItems = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
   }
  const addItems = (item) => {
    setItems((prev) => [{...item}, ...prev] )
  }

  return (
    <CartContextProvider value={{items,addItems,removeItems}}>
      <div className="flex flex-col">
        <div className="flex justify-end mt-8 mr-8">
          <ShopHeader />
        </div>
        <div>
          <Items/>
        </div>
      </div>
    </CartContextProvider>
  );
};

export default Shop;
