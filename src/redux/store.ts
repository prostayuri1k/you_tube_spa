import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import resultsSlice from "./slices/resultsSlice";
import inputSlice from "./slices/inputSlice";



export const store = configureStore({
    reducer: {
        login: loginSlice,
        input: inputSlice,
        results: resultsSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;