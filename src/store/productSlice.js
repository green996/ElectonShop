import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: [],
        currentSearch: ''
    },
    reducers: {
        getProductHandler: (state, action) => {
            state.allProducts = action.payload;
        },
        saveSearchValue: (state, action) => {
            state.currentSearch = action.payload;
        }
    }

}
)


export const { getProductHandler, saveSearchValue } = productSlice.actions;
export default productSlice.reducer;
