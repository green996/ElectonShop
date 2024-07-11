import { Rating } from "@mui/material"
import { Link } from "react-router-dom"



function CardProductComponent({ item }) {
    return (
        <div className="w-80 h-full border border-mainBlue rounded-2xl flex flex-col text-center gap-4 ">
            <div className="relative">
                <img src={item.thumbnail} alt={item.title} className="w-full h-40 object-cover rounded-t-2xl" />
                <div className="absolute top-0 bottom-0 left-0 right-0 rounded-t-2xl opacity-60  bg-slate-900 hover:opacity-0 transition-all" />
            </div>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <span className="text-mainBlue">${item.price}</span>
            <div>
                <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
            </div>
            <Link to={`/productDetails/${item.id}`}>View Detail</Link>
        </div>
    )
}

export default CardProductComponent