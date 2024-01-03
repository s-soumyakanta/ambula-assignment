import { Outlet } from "react-router-dom"
import {Navbar,Footer} from './components/index'

//used App component used as a layout component for the application
const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App