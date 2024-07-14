import { createAsyncThunk } from "@reduxjs/toolkit"; 
import { axiosConfig } from "../../../services/axiosConfig";

export const createInvite = createAsyncThunk(
    "invitees/createInvite",
    async (data, thunkAPI) => {
        try {
            const response = await axiosConfig.post('invite', data, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
            }
        });
        return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    } 
)