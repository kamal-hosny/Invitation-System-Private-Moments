import { configureStore } from "@reduxjs/toolkit";
import { postLoginAuthSliceReducer } from "../store/login/loginAuthSlice";

export const store = configureStore({
    reducer: {
        loginAuth: postLoginAuthSliceReducer,
    }
})