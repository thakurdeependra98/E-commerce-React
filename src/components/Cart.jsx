import { useSelector } from "react-redux";
import { Link } from "react-router-dom"


const Cart = () => {
  const {cart}= useSelector((state)=> state.productReducer)
  const {product}= useSelector((state)=> state.productReducer)

  let cartProduct =[]

  for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
    cartProduct.push(product.find((e)=> e.id == element)) 
  }


console.log(cartProduct);


  return (
    <div className="w-full h-full">
      {/* Header Section */}
      <div className="w-screen h-16 pl-4 flex items-center justify-between bg-black">
        <Link to="/" className="text-white text-2xl">
          <i className="ri-arrow-left-line"></i>
        </Link>
        <h2 className="text-2xl text-stone-200 font-[400]">Cart</h2>
        <div></div> {/* Empty div to fill space */}
      </div>

      {/* Cart Items Section */}
      <div className="w-screen h-full">
        <hr className="mb-8"/>
        <div className="w-screen flex items-center justify-between">
          <h1 className="flex-1 text-center text-2xl">Product</h1>
          <h1 className="flex-1 text-center text-2xl">Quantity</h1>
          <h1 className="flex-1 text-center text-2xl">Amount</h1>
        </div>


        <div className="cartContainer w-screen h-[32vw] pt-2 pb-2">
          {/* Example Cart Item */}
{ cartProduct && cartProduct.length> 0 ?
 (
  cartProduct.map((item, index)=>{
    return( 
       <div key={index} className="cartBoxes flex items-center justify-between p-4">
      <div className="flex items-center gap-2 flex-1">
        <img className="w-24 h-24 object-contain" src={item.image} alt={item.title} />
        <h1>{item.title}</h1>
      </div>
      <div className="flex items-center gap-2 flex-1 justify-center ">
        <button className="text-2xl">-</button>
        <h2 className="text-2xl">1</h2>
        <button className="text-2xl">+</button>
      </div>
      <h1 className="flex-1 text-center">₹{item.price}</h1>
    </div>
    
    
  )
  })

 )
: (
  <h4 className="text-2xl mt-8 mx-4">No products available !</h4>

)
}
</div>

        {/* Total Amount and Buy Now Section */}
        <div className="w-screen absolute bottom-0 ">
          <div className="flex items-center justify-between px-[8vw] ">
            <h1>Total Amount</h1>
            <h1>₹Total</h1>
          </div>
          <div className="w-screen flex items-center justify-center py-4">
            <button className="active:scale-[0.94] bg-black text-white py-2 px-4 rounded">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
