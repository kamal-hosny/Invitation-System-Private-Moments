import { configureStore } from "@reduxjs/toolkit";
import { postLoginAuthSliceReducer } from "../store/login/loginAuthSlice";
import authSlice from "../store/login/auth/authSlice";
import { getAllPartySliceReducer } from "../store/party/partySlice";
import { getAllInviteesSliceReducer } from "../store/invitees/inviteesSlice";
export const store = configureStore({
    reducer: {
        // Auth
        loginAuth: postLoginAuthSliceReducer,
        userAuth: authSlice,
        // party
        allParty: getAllPartySliceReducer,
        // Invitees
        allInvitees: getAllInviteesSliceReducer
    }
});
