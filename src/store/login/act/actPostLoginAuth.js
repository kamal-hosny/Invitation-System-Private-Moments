import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosConfig } from "../../../services/axiosConfig";

export const loginAuth = createAsyncThunk(
    "auth/loginAuth",
    async (_, thunkAPI) => {
        try {
            const { data } = await axiosConfig({
                url: `user/login`,
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
