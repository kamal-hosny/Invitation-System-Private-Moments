import { createSlice } from "@reduxjs/toolkit";
import { getAllParty } from "./act/actGetAllParty";
import { deleteParty } from "./act/actDeleteParty";
import { getOneParty } from "./act/actGetOneParty";
import { postParty } from "./act/actCreateParty";
import { editParty } from "./act/actEditParty";

const initialState = {
    records: [], // Ensure records is initialized as an array
    loading: false,
    error: null,
    record: null,
};

const getAllPartySlice = createSlice({
    name: "party",
    initialState,
    reducers: {
        cleanRecord: (state) => {
            state.record = null;
        },
    },
    extraReducers: (builder) => {
        builder
            // get all the party
            .addCase(getAllParty.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllParty.fulfilled, (state, action) => {
                state.loading = false;
                state.records = action.payload;
                state.error = null; // Clear the error if the request is successful
            })
            .addCase(getAllParty.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // delete the party
            .addCase(deleteParty.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteParty.fulfilled, (state, action) => {
                state.loading = false;
                state.records = state.records.filter((el) => el.id !== action.payload);
            })
            .addCase(deleteParty.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // get one party
            .addCase(getOneParty.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOneParty.fulfilled, (state, action) => {
                state.loading = false;
                state.record = action.payload;
            })
            .addCase(getOneParty.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // create party
            .addCase(postParty.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(postParty.fulfilled, (state, action) => {
                state.loading = false;
                if (Array.isArray(state.records)) {
                    state.records.push(action.payload);
                } else {
                    state.records = [action.payload];
                }
            })
            .addCase(postParty.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // edit party
            .addCase(editParty.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(editParty.fulfilled, (state, action) => {
                state.loading = false;
                state.record =action.payload;
            })
            .addCase(editParty.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export const getAllPartySliceReducer = getAllPartySlice.reducer;
