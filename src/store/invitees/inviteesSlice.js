import { createSlice } from "@reduxjs/toolkit";
import { getAllInvitees } from "./act/actGetAllPartyInvitees";
import { createInvite } from "./act/actCreateInvitees";
import { deleteInvite } from "./act/actDeleteInvitees";
import { editInvite } from "./act/actEditInvitees";
import { getOneInvite } from "./act/actGetOneInvite";

const initialState = {
    records: [],
    loading: false,
    error: null,
    record: null,
};

const getAllInviteesSlice = createSlice({
    name: "invitees",
    initialState,
    extraReducers: (builder) => {
        builder
            // getAllInvitees
            .addCase(getAllInvitees.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllInvitees.fulfilled, (state, action) => {
                state.loading = false;
                state.records = action.payload;
            })
            .addCase(getAllInvitees.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // createInvite
            .addCase(createInvite.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createInvite.fulfilled, (state, action) => {
                state.loading = false;
                if (Array.isArray(state.records)) {
                    state.records.push(action.payload);
                } else {
                    state.records = [action.payload];
                }
            })
            .addCase(createInvite.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // deleteInvite
            .addCase(deleteInvite.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteInvite.fulfilled, (state, action) => {
                state.loading = false;
                state.records = state.records.filter((el) => el.id !== action.payload);
            })
            .addCase(deleteInvite.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // editInvite
            .addCase(editInvite.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })

            .addCase(editInvite.fulfilled, (state, action) => {
                state.loading = false;
                if (Array.isArray(state.records)) {
                    const index = state.records.findIndex(invite => invite.id === action.payload.id);
                    if (index !== -1) {
                        state.records[index] = action.payload;
                    }
                }
            })

            .addCase(editInvite.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // get one invite
            .addCase(getOneInvite.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOneInvite.fulfilled, (state, action) => {
                state.loading = false;
                state.record = action.payload;
            })
            .addCase(getOneInvite.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
});

export const getAllInviteesSliceReducer = getAllInviteesSlice.reducer;
