import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favoriteItems: [],
        favoriteTotal: 0,
    },
    reducers: {
        favoriteHandler: (state, action) => {
            let copyArray = [...state.favoriteItems];
            let findIndex = null;

            copyArray.find((item, index) => {
                if (item.id === action.payload.id) {
                    findIndex = index;
                    return;
                }
            })

            if (findIndex === null) {
                copyArray.push(action.payload);
                state.favoriteTotal++;
            } else {
                copyArray.splice(findIndex, 2);
                state.favoriteTotal--;
            }


            state.favoriteItems = copyArray;

        }
    }
})

export const { favoriteHandler } = favoriteSlice.actions;
export default favoriteSlice.reducer;