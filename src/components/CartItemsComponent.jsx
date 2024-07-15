

function CartItemsComponent({ item }) {
    return (
        <div className="grid grid-cols-4 place-items-center"  >
            <div className="flex gap-2 items-center">
                <img src={item.thumbnail} alt={item.title} className="w-24 h-24 rounded-2xl object-cover" />
                <div className="flex flex-col gap-1">
                    <h2 className="text-mainBlue font-medium text-xl">{item.title}</h2>
                    <p className="text-textColor">{item.category}</p>
                    <p className="text-textColor">{item.stock}</p>
                </div>
            </div>
            <div>${item.price}</div>
            <div className="flex items-center">
                <button className="px-2 py-1 bg-slate-300 text-base">+</button>
                <span className="px-2 py-1 bg-slate-300 text-base">{item.count}</span>
                <button className="px-2 py-1 bg-slate-300 text-base">-</button>
            </div>
            <div>
                <p>{item.cartTotal}</p>
            </div>
        </div>
    )
}

export default CartItemsComponent