import {State} from "@/types/State";

export const getContacts = (state: State) => state.contacts.contacts;

export const getUser = (state: State) => state.user

export const getUserLogin = (state: State) => state.user.isLogin