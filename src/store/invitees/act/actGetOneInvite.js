import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";

export const getOneInvite = createAsyncThunk(
    "invitees/getOneInvite",
    async (id, thunkAPI) => {
        try {
            const response = await axiosConfig.get(`invite/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)