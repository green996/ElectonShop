import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalProduct: 0,
        totalPrice: 0,
    },
    reducers: {
        saveInCartHandler: (state, action) => {
            let copyArray = [...state.cart];


            let findIndex = null;

            copyArray.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return;
                }
            })
            if (findIndex === null) {
                copyArray.push({ ...action.payload, count: 1, cartTotal: action.payload.price });
                state.totalPrice += action.payload.price;
                state.totalProduct++;
            } else {
                copyArray[findIndex].count++;
            }

            state.cart = copyArray;
        },
        setPriceHandler: (state, action) => {
            const { increment, index } = action.payload;

            let copyArray = [...state.cart];
            copyArray[index].cartTotal += copyArray[index].price * increment;

            //total price
            state.totalPrice = subTotal(copyArray)

            if (copyArray[index].count === 1 && increment === -1) {
                copyArray.splice(index, 1);
                state.totalProduct--;
            } else {
                copyArray[index].count += increment;
            }
            state.cart = copyArray;

        }


    }
})

function subTotal(arr) {
    return arr.reduce((acc, curr) => {
        return acc + curr.cartTotal;
    }, 0)
}

export const { saveInCartHandler, setPriceHandler } = cartSlice.actions;
export default cartSlice.reducer;