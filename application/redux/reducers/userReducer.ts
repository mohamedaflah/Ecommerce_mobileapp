import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../dev/types/user/userState";

const initialState: UserState = {
  loading: false,
  err: false,
  user: null,
};
const userReducer = createSlice({
  name: "userreducer",
  initialState,
  reducers: {},
});

export default userReducer.reducer;
