

import Nav from "./Nav.jsx"
import Card from "./Card.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productsLoad } from "../store/Reducers/productSlice.jsx";



const Product = ()=>{
const dispatch = useDispatch()
  const {product} = useSelector((state)=> state.productReducer)

  const {like} = useSelector((state)=> state.productReducer)
console.log(like);
useEffect(()=>{
  dispatch(productsLoad())
})


return (
  <div className="min-w-screen min-h-screen bg-black  ">
  <Nav/>
  <div className="min-w-screen flex items-center justify-between py-1 px-20 bg-zinc-800 mt-10">
    <div className="flex gap-8 text-white">
      <h1>Electronics</h1>
      <h1>Fashion</h1>
      <h1>Grocery</h1>
      <h1>Home & Furniture</h1>
      <h1>Mobiles</h1>
      <h1>Beauty Products</h1>
    </div>
    <input type="text" className=" rounded-full w-[20vw] h-[2.3vw] outline-none bg-white pl-5" placeholder="Search Product" />
  </div>
  <div className="pl-[3vw] pt-[3vw]  pb-[1vw] " >
  <Card product={product} like={like}/>
  </div>

  </div>
)
}
export default Product