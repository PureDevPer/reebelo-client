import { createSlice } from "@reduxjs/toolkit";

interface ProductState {
    lastProduct: string;
}

const initialState: ProductState = {
    lastProduct: "",
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addLastProduct: (state, action) => {
            state.lastProduct = action.payload.lastProduct;
        },
    },
});

export const { addLastProduct } = productSlice.actions;
export default productSlice.reducer;
