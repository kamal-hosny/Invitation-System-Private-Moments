import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";

export const getAllInvitees = createAsyncThunk(
    "invitees/getAllInvitees",
    async (id, thunkAPI) => {
        try {
            const response = await axiosConfig.get(`invite`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)