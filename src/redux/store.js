import { configureStore } from "@reduxjs/toolkit";
import inputFields from "./Slices/inputFields";
import sortingBased from "./Slices/sortingBased";
import asyncApiCall from "./Slices/asyncApiCall";

export const store = configureStore({
    reducer: {
        input: inputFields,
        sortBased: sortingBased,
        asyncApiCall: asyncApiCall,
    },
});
