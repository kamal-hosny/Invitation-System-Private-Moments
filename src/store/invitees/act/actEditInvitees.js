import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";

export const editInvite = createAsyncThunk(
    "invitees/editInvite", 
    async (data, thunkApi) => {
        try {
            const response = await axiosConfig.put(`https://kamalapi.onrender.com/invite/${data._id}`, data, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)