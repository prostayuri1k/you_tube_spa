import {createSlice} from "@reduxjs/toolkit";

type ResultsSliceState = {
    nextPageToken: string | undefined;
    totalResults: number,
    items: {
        id: string,
        title: string,
        description: string,
        image: {
            medium: string,
            high: string
        },
    } []
}

const initialState: ResultsSliceState = {
    nextPageToken: undefined,
    totalResults: 0,
    items: []
}

const resultsSlice = createSlice({
    name: "resultsSlice",
    initialState: initialState,
    reducers: {
        getResults: (state, action) => {
            state.items = action.payload.items;
            state.nextPageToken = action.payload.nextPageToken;
            state.totalResults = action.payload.totalResults;
        }
    },
    extraReducers: (builder) => {
    }
});




export const {getResults} = resultsSlice.actions;
export default resultsSlice.reducer;