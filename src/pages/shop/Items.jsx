import mockData from '../../assets/MOCK_DATA.json'
import {useCartContext} from "../../contexts/index.js"
const Items = () => {
  const {addItems} = useCartContext()
  return (
    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 px-4 py-8 w-full'>
        {
            mockData.map((item) =>{
                return(
                    <div key={item.id} className='h-72 bg-blue-950 flex flex-col rounded-xl p-2 items-center justify-between text-white'>
                      <div className='h-3/5'>
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className='h-2/5 text-center'>
                        <p className='text-xl'>${item.price}</p>
                        <p className='text-base md:text-lg '>{item.name}</p>
                        <p>ID: {item.medId}</p>
                      </div>
                      <div className='h-1/5'>
                        <button onClick={() => addItems(item)} className='my-2 p-2 bg-red-500 rounded-full'>Add to cart</button>
                      </div>
                    </div>
        
                )
            })
        }
    </div>
  )
}

export default Items