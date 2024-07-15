import { useSelector } from "react-redux"


function CartProductPage() {
    const { cart } = useSelector((state) => state.cartStore)
    //console.log(cart)
    return (
        <div>CartProductPage</div>
    )
}

export default CartProductPage