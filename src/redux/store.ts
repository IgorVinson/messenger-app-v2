import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {userReducer} from "@/redux/userSlice";

const store = configureStore({
    reducer: {
        contacts: rootReducer,
        user: userReducer,
    },
});

export default store;
