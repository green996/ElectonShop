import { useSelector } from "react-redux"
import CartItemsComponent from "../components/CartItemsComponent"


function CartProductPage() {
    const { cart } = useSelector((state) => state.cartStore)
    //console.log(cart)
    return (
        <div className=" mt-5 lg:mt-12">
            <div className="container mx-auto flex flex-col lg:flex-row lg:gap-5">
                {/*left side*/}
                <div className="w-full lg:w-[70%]">
                    {/*header*/}
                    <div className="grid grid-cols-4 bg-[#e2F4FF] h-14 place-items-center">
                        <p className="text-xl text-textColor font-medium">Product</p>
                        <p className="text-xl text-textColor font-medium" >Price</p>
                        <p className="text-xl text-textColor font-medium">Quantity</p>
                        <p className="text-xl text-textColor font-medium">Subtotal</p>
                    </div>
                    {/*body of items*/}
                    <div className="flex flex-col gap-4">
                        {cart.map((item, index) => {
                            return <CartItemsComponent item={item} key={index} />
                        })}
                    </div>
                </div>
            </div>
            {/*rigth side*/}
            <div className="w-full lg:w-[30%]">

            </div>


        </div>
    )
}

export default CartProductPage