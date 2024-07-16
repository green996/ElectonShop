import { useSelector } from "react-redux"
import CartItemsComponent from "../components/CartItemsComponent"
import country from "../country/country"


function CartProductPage() {
    const { cart, totalPrice } = useSelector((state) => state.cartStore)
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
                            return <CartItemsComponent item={item} index={index} key={index} />
                        })}
                    </div>
                </div>

                {/*rigth side*/}
                <div className="w-full lg:w-[30%] border border-mainBlue flex flex-col gap-3 px-3">
                    {/*heading*/}
                    <div className="h-14 bg-[#E2F4FF] flex items-center justify-center">
                        <h2 className="text-center font-medium text-base">Cart Total</h2>
                    </div>
                    {/*content*/}
                    <div className="flex items-center justify-between my-4 border-b border-textColor">
                        <p className="text-base font-medium text-mainBlue  ">Subtotal</p>
                        <span className="text-base">{totalPrice}</span>
                    </div>
                    {/*discount*/}
                    <div className="">
                        <p className="text-sm text-slate-500">Take ypur discount 50%</p>
                        <div className="border border-slate-500 rounded-full flex items-center justify-center ">
                            <input type="text" placeholder="Insert your coupon" className="px-2 py-1 rounded-full outline-none w-full" />
                            <button className="px-2 py-1 rounded-full text-mainBlue ">Apply</button>
                        </div>


                    </div>
                    {/*country*/}
                    <div className="border border-slate-500 rounded-full">
                        <select className="w-full px-2 py-1 border border-slate-500 rounded-full bg-textWhite">
                            {country.map((el, index) => {
                                return <option key={index}>{el.name}</option>
                            })}
                        </select>
                    </div>
                    <button className="bg-mainOrange text-textWhite px-4 py-2 rounded-full">Process Payment</button>
                </div>
            </div>
        </div >
    )
}

export default CartProductPage