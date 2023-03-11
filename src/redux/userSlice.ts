import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
        name: 'user',
        initialState: {
            id: '',
            username: '',
            email: '',
            isLogin: false,
            selectedContact: null
        },
        reducers: {
            loginUser: (state, action) => {
                const {id, username, email} = action.payload;
                state.id = id;
                state.username = username;
                state.email = email;
                state.isLogin = true
            },
            logoutUser: (state) => {
                state.username = '';
                state.email = '';
                state.selectedContact = null;
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
