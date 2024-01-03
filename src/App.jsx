import { Outlet } from "react-router-dom"
import {Navbar,Footer} from './components/index'

//used App component used as a layout component for the application
const App = () => {
  return (
    <div className="relative">
      <div className="sticky top-0">
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