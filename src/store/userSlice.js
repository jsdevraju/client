import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  user: "someone you'd never know",
  token: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      }
    },
    logout: (state) => {
      return { user: null, token: "" }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {
  login,
  logout,
  
} = userSlice.actions

export default userSlice.reducer
