import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig"; 

export const getAllParty = createAsyncThunk(
    "party/getAllParty",
    async ( _, thunkAPI) => {
        try {
            const response = await axiosConfig.get('party');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)