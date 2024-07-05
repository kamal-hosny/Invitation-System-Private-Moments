import { configureStore } from "@reduxjs/toolkit";
import { postLoginAuthSliceReducer } from "../store/login/loginAuthSlice";
import authSlice from "../store/login/auth/authSlice";
import { getAllPartySliceReducer } from "../store/party/partySlice";

export const store = configureStore({
    reducer: {
            loginAuth: postLoginAuthSliceReducer,
            userAuth: authSlice,
        party: {
            allParty: getAllPartySliceReducer,
        }
    }
})