import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     text: "",
// };

export const inputFields = createSlice({
    name: "input",
    initialState: {
        searchText: "ok",
        searchBy: "",
    },
    reducers: {
        pushInputFields: (state, action) => {
            return {
                ...state,
                searchText: action.payload.searchText,
                searchBy: action.payload.searchBy,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { pushInputFields } = inputFields.actions;

export default inputFields.reducer;
