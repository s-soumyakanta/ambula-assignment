import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="p-4 bg-blue-950 text-white space-y-10">
      <div className="flex justify-between">
        <div>
          <Link to='/' >
            <p className="uppercase text-xl lg:text-2xl">Ambula</p>
          </Link>
        </div>

        <div className="space-y-3">
          <p className="text-lg lg:text-xl uppercase">Quick Links</p>
          <ul className="text-sm space-y-3 md:text-base  lg:text-xl">
          <li><Link to='/'>Home</Link></li>
          <li> <Link to='about'>About</Link></li>
          <li> <Link to='contact'>Contact</Link></li>
          </ul>
        </div>


      </div>

      <div className=" flex justify-center">
        <p className="text-sm">
          Created with ❤️ by - <a href="https://github.com/s-soumyakanta" target="_black">S Soumyakanta</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer