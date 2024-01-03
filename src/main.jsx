import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,
         Routes, 
         Route 
       } from 'react-router-dom'

import { About,
         Contact,
         Home,
         Shop,
         Movies,
         Todo
       } from './pages/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shop' element={<Shop />} />
          <Route path='movies' element={<Movies />} />
          <Route path='todo' element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
