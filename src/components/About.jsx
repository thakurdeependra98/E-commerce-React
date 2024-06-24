import { Link } from "react-router-dom"
import Nav from "./Nav.jsx"

const About = ()=>{
 
    return(
        <div className="w-screen min-h-screen bg-black overflow-hidden "    >
            <Nav/>

            <div className="w-screen  h-[36vw]   flex  pl-[1vw] mt-20 " >
                <div className="w-[80%] h-full border-r border-1-stone-400 ">
<div className="w-full h-[11vw] flex items-center justify-center flex-col  gap-[1vw] mb-[2vw]">
    <img className="w-[7.5vw] h-[7.5vw] object-contain border border-stone-300 rounded-full" src="" alt="" />
    <h2 className="cursor-pointer text-white">Edit Picture <i className="ri-edit-line"></i></h2>

</div>

<div className="flex flex-col gap-[1.7vw] items-center  ">
    <input type="text" placeholder="Name" className="w-[20vw] h-[2vw] bg-transparent border-b  outline-none pb-2 " />
    <input type="text"  placeholder="Email" className="w-[20vw] h-[2vw] bg-transparent border-b  rounded outline-none pb-2 "/>
    <input type="text" placeholder="Phone Number" className="w-[20vw] h-[2vw] bg-transparent border-b  rounded outline-none pb-2 " />
    <input type="text" placeholder="Category" className="w-[20vw] h-[2vw] rounded bg-transparent border-b  outline-none pb-2 " />
    <textarea name="address" id="" placeholder="Address" className="w-[20vw] h-[2vw] bg-transparent border-b  rounded outline-none pb-2  "></textarea>
    <button className=" text-lg px-[2vw] py-[0.2vw] rounded-md bg-white active:scale-[0.75] " >Edit</button>
</div>
                </div>
                <div className="w-[20%] h-full ">
<div className="flex flex-col  gap-[2vw] pl-[5vw] pt-[5vw]">
   <Link to={"/cart"} ><h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Cart</h2></Link> 
   <Link to={"/order"}> <h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Order</h2></Link>
<Link to={"/Wishlist"}>    <h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Wishlist</h2></Link>
    <h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Help us</h2>
    <h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Delete Account</h2>
    <h2 className="text-white  text-2xl cursor-pointer  active:font-[300] active:text-gray-200">Logout</h2>
</div>


                </div>
            </div>

        </div>
    )
}
export default About