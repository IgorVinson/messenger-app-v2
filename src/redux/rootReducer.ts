import {combineReducers, createReducer} from "@reduxjs/toolkit";


const initialState = {
    users: [{name: 'user1'}]
}

const rootReducer = createReducer(initialState, {
    'users/addUser': (state, action) => {
        state.users.push(action.payload)
    }
})
export default rootReducer;