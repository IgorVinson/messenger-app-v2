import {combineReducers, createReducer} from "@reduxjs/toolkit";

const rootReducer = combineReducers(
    {
        usersReducer: createReducer([], {
            'users/getUsers': (state, action) => {
                return action.payload
            }
        })
    }
)

export default rootReducer;