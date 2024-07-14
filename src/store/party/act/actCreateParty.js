import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODUzODY1MWRmZjUwNmIyMDFlNmRlYSIsImlhdCI6MTcyMDAwNzAyMn0.opILJmrnCwEmFXpAHYuXrMmabE0ZMI2pbq0tosIDaIQ";

export const postParty = createAsyncThunk(
    "party/postParty",
    async (data, thunkAPI) => {
        try {
            const response = await axiosConfig.post('party', data, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "token": token
                }
            });
            return response.data;
        } catch (error) {
            // Log the error for debugging
            console.error("Error posting party:", error.response?.data || error.message);
            return thunkAPI.rejectWithValue(error.response?.data || "An unexpected error occurred");
        }
    }
);
