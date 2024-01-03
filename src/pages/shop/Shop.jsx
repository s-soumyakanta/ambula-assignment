import Items from "./Items"
import ShopHeader from "./ShopHeader"
const Shop = () => {
  return (
    <div className="flex flex-col w-full relative -z-10">
      <div className="w-full flex justify-end sticky top-10 ">
        <ShopHeader />
      </div>
      <div className=" flex flex-col items-center justify-center">
        <Items />
      </div>
    </div>
  )
}

export default Shop