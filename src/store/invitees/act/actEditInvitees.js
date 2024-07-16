import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";

export const editInvite = createAsyncThunk(
    "invitees/editInvite", 
    async (data, thunkApi) => {
        try {
            const response = await axiosConfig.put(`https://kamalapi.onrender.com/invite/${data?.inviteID}`, data, {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
)        