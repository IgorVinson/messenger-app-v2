import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
        name: 'user',
        initialState: {
            data: '',
            isLogin: false,
            selectedContact: null
        },
        reducers: {
            loginUser: (state, action) => {
                state.data = action.payload;
                state.isLogin = true
            },
            logoutUser: (state) => {
                state.data = '';
                state.isLogin = false
            },
            selectContact: (state, action) => {
                state.selectedContact = action.payload
            }
        }
    }
)


export const {loginUser, logoutUser, selectContact} = userSlice.actions;
export const userReducer = userSlice.reducer;
