import { createSlice } from "@reduxjs/toolkit";
import { getAllParty } from "./act/actGetAllParty";

const initialState = {
    records: [],
    loading: false,
    error: null
};

const getAllPartySlice = createSlice({
    name: "party", 
    initialState, 
    extraReducers: ( builder ) => {
        builder
            .addCase(getAllParty.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllParty.fulfilled, (state , action) => {
                state.loading = false;
                state.records = action.payload;
            })
            .addCase(getAllParty.fulfilled, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const getAllPartySliceReducer = getAllPartySlice.reducer