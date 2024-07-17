//icons
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { removeProductHandler, setPriceHandler } from "../store/cartSlice";
import { Link } from "react-router-dom";

function CartItemsComponent({ item, index }) {
    const dispatch = useDispatch();
    return (
        <div className="grid grid-cols-4 place-items-center relative px-3"  >
            <div className="flex gap-4 items-center  ">
                <Link to={`/productDetails/${item.id}`}>
                    <img src={item.thumbnail} alt={item.title} className="w-24 h-24 rounded-2xl object-cover" />
                </Link>
                <div className="gap-1 hidden lg:flex flex-col">
                    <h2 className="text-mainBlue font-medium text-xl">{item.title}</h2>
                    <p className="text-textColor">{item.category}</p>
                    <p className="text-textColor">{item.stock}</p>
                </div>
            </div>
            <div>${item.price}</div>
            <div className="flex items-center">
                <button className="px-2 py-1 bg-slate-300 text-base" onClick={() => { dispatch(setPriceHandler({ increment: 1, index })) }}>+</button>
                <span className="px-2 py-1 bg-slate-300 text-base">{item.count}</span>
                <button className="px-2 py-1 bg-slate-300 text-base" onClick={() => { dispatch(setPriceHandler({ increment: -1, index })) }}>-</button>
            </div>
            <div>
                <p>{item.cartTotal}</p>
            </div>
            <CiCircleRemove size={25} color="C33131" className="absolute top-0 right-0 cursor-pointer" onClick={() => {
                dispatch(removeProductHandler(index))

            }} />
        </div>
    )
}

export default CartItemsComponent