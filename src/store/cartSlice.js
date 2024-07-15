import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
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
                copyArray.push({ ...action.payload, count: 1 });
            } else {
                copyArray[findIndex].count++;
            }

            state.cart = copyArray;
        }
    }
})

export const { saveInCartHandler } = cartSlice.actions;
export default cartSlice.reducer;