import { Link } from "react-router-dom"

const Nav = ()=>{
    return(
        <nav className=" min-w-screen h-[3.5vw]  flex  items-center justify-between px-20 pt-12">
            <div className="text-white" ><h1 className="text-2xl tracking-widest font-semibold">E-Shop</h1></div>
            <div className="w-[40%] h-[2.5vw] bg-stone-200 rounded-full  flex  items-center gap-[7vw] justify-center ">
                <Link className="font-[500]" to="/" >Home</Link>
                <Link className="font-[500]" to="/Product" >Product</Link>
                <Link className="font-[500]" to="/About" >About</Link>
            </div>
            <div className="text-white flex items-center gap-8">
                <h3 className="hover:bg-white hover:text-black px-4 py-1 rounded-full">Login</h3>
                <i class="ri-shopping-bag-line hover:bg-white hover:text-black px-2 py-1 rounded-full "></i>
            </div>
        </nav> 
    )
}
export default Nav