import {configureStore} from "@reduxjs/toolkit";
import {contactsListReducer} from "@/redux/contactsListSlice";
import {userReducer} from "@/redux/userSlice";
import {messagesReducer} from "@/redux/messagesSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        contacts: contactsListReducer,
        messages: messagesReducer,
    },
});

export default store;
