import Items from "./Items";
import ShopHeader from "./ShopHeader";


const Shop = () => {
  return (
     <div className="flex flex-col">
        <div className="flex justify-end mt-8 mr-8">
          <ShopHeader />
        </div>
        <div>
          <Items/>
        </div>
      </div>
  );
};

export default Shop;
