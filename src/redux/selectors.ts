import {State} from "@/types/State";

export const getUser = (state: State) => state.user

export const getUserLogin = (state: State) => state.user.isLogin

