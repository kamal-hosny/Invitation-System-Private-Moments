import { createSlice } from "@reduxjs/toolkit";
import { loginAuth } from "./act/actPostLoginAuth";

const initialState = {
    records: [],
    loading: false,
    error: null
};

const postLoginAuthSlice = createSlice({
    name: "login",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(
            loginAuth.pending,(state, action) => {
                state.loading = true;
                state.error = null;
            },
            loginAuth.fulfilled,(state, action) => {
                state.loading = true;
                state.records.push(action.payload)
            },
            loginAuth.rejected,(state, action) => {
                state.loading = false;
                state.error = action.payload;
            }
        )
    }
})

export const postLoginAuthSliceReducer = postLoginAuthSlice.reducer;


