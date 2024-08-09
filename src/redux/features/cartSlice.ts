import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Product {
    id: number;
    title: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState: Array<Product> = [];

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            if ((state.findIndex(item => item.id === action.payload.id)) === -1) {
                state.push(action.payload);
            } else {
                return state.map(item => {
                    return item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item;
                });
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            return state.filter(item => item.id !== action.payload);
        },
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;