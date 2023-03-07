import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
        name: 'user',
        initialState: {
            data: null,
            isLogin: false
        },
        reducers: {
            loginUser: (state, action) => {
                state.data = action.payload;
                state.isLogin = true
            },
            logoutUser: (state) => {
                state.data = null;
                state.isLogin = false
            }
        }
    }
)

export const {loginUser, logoutUser} = userSlice.actions;
export const userReducer = userSlice.reducer;