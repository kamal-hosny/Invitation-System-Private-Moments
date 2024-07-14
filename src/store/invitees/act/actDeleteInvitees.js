import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";

export const deleteInvite = createAsyncThunk(
    "Invitees/deleteInvite",
    async (id, thunkAPI) => {
        try {
            const response = await axiosConfig.delete(`invite/${id}`)
            if(!response.ok) {
                throw new Error('Failed to delete the post')
            }
            return id; 
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)