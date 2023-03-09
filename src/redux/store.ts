import {configureStore} from "@reduxjs/toolkit";
import {usersListReducer} from "@/redux/usersListSlice";
import {userReducer} from "@/redux/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        users: usersListReducer,
    },
});

export default store;
