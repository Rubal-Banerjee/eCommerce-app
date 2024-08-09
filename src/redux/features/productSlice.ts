import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Iproduct {
    id: number;
    imgSrc: string;
    fileKey: string;
    name: string;
    price: string;
    category: string;
}

const initialState: Iproduct = {
    id: 0,
    imgSrc: "",
    fileKey: "",
    name: "",
    price: "",
    category: "",
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<Iproduct>) => {
            return action.payload;
        }
    }
})

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;