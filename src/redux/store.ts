import {configureStore} from "@reduxjs/toolkit";
import {contactsListReducer} from "@/redux/contactsListSlice";
import {userReducer} from "@/redux/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        contacts: contactsListReducer,
    },
});

export default store;
