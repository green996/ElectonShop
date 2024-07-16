import { Rating } from "@mui/material"
import { Link } from "react-router-dom"



function CardProductComponent({ item, activeView }) {
    return (
        <div className={activeView === 'gridView' ? 'w-80 h-full border border-mainBlue rounded-md flex flex-col text-center gap-4' : 'w-full mt-10 flex items-center justify-between bg-slate-200 rounded-2xl pr-3'}>
            <div className="relative">
                <img src={item.thumbnail} alt={item.title} className={activeView === 'gridView' ? 'w-full h-40 object-cover rounded-t-md' : 'w-52 h-52 object-cover rounded-t-md'} />
                <div className="absolute top-0 bottom-0 left-0 right-0 rounded-t-xl opacity-60  bg-slate-900 hover:opacity-0 transition-all" />
            </div>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <span className="text-mainBlue font-bold">${item.price}</span>
            <div>
                <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
            </div>
            <Link to={`/productDetails/${item.id}`} className="bg-mainOrange text-textWhite px-3 py-1 rounded-md cursor-pointer hover:bg-mainBlue">View Detail</Link>
        </div>
    )
}

export default CardProductComponent