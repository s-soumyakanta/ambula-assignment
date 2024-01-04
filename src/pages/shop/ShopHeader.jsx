import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
import CloseIcon from '@mui/icons-material/Close';
import { useCartContext } from '../../contexts';

const ShopHeader = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen((prev) => !prev)
    }

    const {items} = useCartContext()

  return (
    <> 
    <div className='w-full  flex justify-end '>
        <div className=' bg-blue-950 py-3 flex space-x-16 px-8 rounded-xl text-white'>
        <div className='cursor-pointer' onClick={handleClick}>
            <div className='relative'>
                <ShoppingCartOutlinedIcon style={{fontSize:"3rem"}}  />
                <p className='absolute -top-2 -right-2 px-2 bg-red-500 rounded-full '>{items.length}</p>
            </div>
        </div>

        <div onClick={handleClick} className='cursor-pointer flex justify-center items-center p-2 bg-red-500 rounded-xl font-bold text-lg'>
            <div>
                <p>View All Items</p>
            </div>
            <div>
                <ArrowRightAltIcon />
            </div>
        </div>
        </div>
    </div>

    {
        isOpen && createPortal(
        <div className=' fixed top-0 w-full z-20 min-h-screen flex justify-center items-center bg-slate-100'>
           <Cart />
           <div onClick={handleClick} className='absolute cursor-pointer top-4 right-4'>
            <CloseIcon style={{fontSize:"2rem"}} />
           </div>
        </div>,document.body
    )}
    </>
  )
}

export default ShopHeader

{/* <div className='flex justify-end items-center space-x-6 md:mr-8 mt-10  bg-blue-900 p-2 px-8 rounded-xl text-white'> 
<div className='relative p-2 '>
    <ShoppingCartOutlinedIcon style={{fontSize:"3rem"}}  />
    <p className='absolute top-0 text-white right-0 bg-red-500 rounded-full  px-1  text-xs'>288</p>
</div>
<button onClick={handleClick} className='bg-red-500 p-2 text-white  rounded-full'>
    View All Items <ArrowRightAltIcon  />
</button>
</div> */}