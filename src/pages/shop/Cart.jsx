import { useEffect, useState } from "react"
import { useCartContext } from "../../contexts"

const Cart = () => {
    const [cost,setCost] = useState(0)
    const {items, removeItems} = useCartContext()

    useEffect(() => {
        const totalCost = items.reduce((acc, item) => acc + item.price, 0);
        setCost(totalCost);
      }, [items]);
  return (
    <div className="z-20 w-96  rounded-xl bg-blue-950">
        <div className="flex justify-between p-2">
            <div className="p-2 bg-white rounded-md">
                <p>Total Items: {items.length}</p>
            </div>
            <div className="p-2 bg-white rounded-md">
                <p>Subtotal: ${cost}</p>
            </div>
        </div>

        <div className="overflow-y-auto h-96">
            {
                items.map((item) => {
                    return(
                        <div key={item.id} className="flex justify-between text-white p-2">
                            <div>
                                <img className="w-10" src={item.image} alt={item.name} />
                            </div>
                            <div>
                                <p className="text-xs">{item.name}</p>
                            </div>
                            <div>
                                <p className="text-xs">${item.price}</p>
                            </div>
                            <div>
                                <button onClick={() => removeItems(item.id)} className="p-1 bg-red-500 rounded-xl">
                                    Remove
                                </button>
                            </div>
                        

                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Cart