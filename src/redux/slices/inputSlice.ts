import {createSlice} from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name: "inputSlice",
    initialState: {
        text: '',
    },
    reducers: {
        addText: (state, action) => {
            state.text = action.payload;
        }
    }
});

export const {addText} = inputSlice.actions;
export default inputSlice.reducer;