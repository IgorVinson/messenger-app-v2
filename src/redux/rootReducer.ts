import { createReducer} from "@reduxjs/toolkit";
import {State} from "@/types/State";

const initialState: State = {
    contacts: []
};

const rootReducer = createReducer(initialState, {
    'contacts/getContacts': (state, action) => {
        state.contacts = [...action.payload]
    }
});
export default rootReducer;
