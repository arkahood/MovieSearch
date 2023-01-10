import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     text: "",
// };

export const SortingBased = createSlice({
    name: "sortBased",
    initialState: {
        value: 0,
    },
    reducers: {
        pushSortMethod: (state, action) => {
            return {
                ...state,
                value: action.payload.val,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { pushSortMethod } = SortingBased.actions;

export default SortingBased.reducer;
