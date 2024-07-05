import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

// Get the cookie value
const cookieValue = Cookies.get("auth");

// Initialize the data variable
let data = { test: { _id: null, name: '', admin: false }, token: '' };
let isLoggedin = false;

if (cookieValue) {
    data = JSON.parse(cookieValue);
    isLoggedin = true;
}

const initialState = {
  isLoggedin: isLoggedin,
  id: data.test._id,
  name: data.test.name,
  admin: data.test.admin,
  token: data.token,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
