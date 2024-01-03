import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const ShopHeader = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen((prev) => !prev)
    }


  return (
    <> 
    <div className='flex justify-end items-center space-x-6 md:mr-8 mt-10 bg-blue-900 p-2 px-8 rounded-xl text-white'> 
        <div className='relative flex p-2 cursor-pointer'>
            <ShoppingCartOutlinedIcon style={{fontSize:"3rem"}}  />
            <p className='absolute top-0 text-white right-0 bg-red-500 rounded-full flex  justify-center items-center px-1  text-sm'>288</p>
        </div>
        <button onClick={handleClick} className='bg-red-500 p-2 text-white  rounded-full'>
            View All Items <ArrowRightAltIcon  />
        </button>
    </div>

    {
        isOpen && createPortal(
            <div className='bg-fuchsia-600 w-full min-h-screen absolute top-0'>
            </div>,document.body)
    }
    </>
  )
}

export default ShopHeader