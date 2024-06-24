
import { useDispatch, useSelector } from "react-redux"
import Nav from "./Nav.jsx"
const Home = ()=>{


return(
<div className="min-w-screen h-screen bg-black ">
  <Nav/>
  <div className="text-white px-40 pt-40 text-left">
    <h5 className="text-xl">Beats Solo</h5>
    <h3 className="text-5xl font-semibold tracking-wider">Wireless</h3>
    <h1 className="text-[175px] font-bold leading-[0.8] text-zinc-900 ">HEADPHONE</h1>
    <button className="bg-white px-8 rounded-full text-black py-2 mt-10 text-md hover:bg-transparent hover:text-white hover:border border-white transition-all">Shop By Category</button>
  </div>
  <div><img className="h-[22rem] absolute top-[28vh] left-[55vw] -rotate-[30deg]" src="https://www.pngplay.com/wp-content/uploads/7/Headphones-Transparent-PNG.png" alt="" /></div>
  <div className="ml-[78%] mt-8 w-[20%]">
    <h1 className=" text-[1.2vw] text-neutral-300">
    'Discover Exclusive Deals and Unique Finds - Headphone with E-Shop !'
    </h1>
  </div>
</div>
  
)
}
export default Home