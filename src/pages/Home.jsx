import { Link } from "react-router-dom"

const Home = () => {
  const cards = [
    {
      id:1,
      text: "Use it to organize appointments and manage medicine doses effortlessly.",
      btnText:"Explore Health Tasks",
      slug:"/todo"
    },
    {
      id:2,
      text:"Need a break? Watch a soothing movie to relax and reduce stress.",
      btnText:"Discover Movies",
      slug:"/movies"
    },
    {
      id:3,
      text:"Shop for medical essentials like medicines and more, all in one place.",
      btnText:"Browse Health Products",
      slug:"/shop"
    }
  ]
  return (
    <div className="min-h-screen mt-10 flex items-center flex-col">
      <div className="text-center space-y-8">
        <p className="text-5xl  font-bold">AmbulaHub <br /> <span className="text-red-500 text-4xl">Manage, Relax, Shop</span></p>
        <p className="max-w-lg text-lg">Stay healthy, unwind with movies, and shop essentials seamlessly with AmbulaHub – where tasks, movies, and shopping come together effortlessly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 md:gap-4 md:px-4 md:mt-24 ">
        {
          cards.map(({id,text,btnText,slug}) =>{
            return(
              <div key={id} className=" bg-blue-950 shadow-xl text-white h-44 rounded-xl text-center flex justify-evenly flex-col items-center max-w-sm">
                <p className="px-4 text-sm">{text}</p>
                <Link to={slug}>
                 <button className="p-3 bg-red-500 rounded-full text-base">{btnText}</button>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home