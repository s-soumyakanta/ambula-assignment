import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;

    if (formData.name.trim() === '') {
      toast.error('Name is required');
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid email address');
      valid = false;
    }

    if (formData.message.trim() === '') {
      toast.error('Message is required');
      valid = false;
    }

    return valid;

  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (validateForm()) {
      toast.success('Form submitted successfully');
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } else {
      console.log('Form has errors.');
    }
  };

  return (
    <>
    <div className='w-full flex flex-col space-y-6 items-center justify-center h-screen -mt-20'>
      <div>
        <h1 className='font-bold text-4xl uppercase text-red-500'>Contact</h1>
      </div>
      <form 
           onSubmit={handleSubmit}
           className='flex flex-col  text-white max-w-5xl  space-y-10 rounded-md p-10 bg-blue-950 md:w-96'
      >
        <div className='flex flex-col space-y-2'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='text-black rounded-sm pl-2'
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='text-black rounded-sm pl-2'
          />
        </div>

        <div className='flex flex-col space-y-2'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='text-black rounded-sm pl-2'
          />
        </div>

        <button type="submit" className='bg-red-500 p-2 rounded-md font-bold uppercase text-xl'>Submit</button>
      </form>

    </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
