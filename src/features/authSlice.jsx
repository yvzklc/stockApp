import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: "",
  firstName: "",
  lastName: "",
  loading: false,
  error: false,
  token: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false
      state.user = payload.user.username
      state.token = payload.token
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false
      state.user = payload.data.username
      state.first_name = payload.data.firstName
      state.last_name = payload.data.lastName
      state.token = payload.token
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const { fetchStart, loginSuccess, fetchFail,registerSuccess } = authSlice.actions

export default authSlice.reducer