import axios from "axios";
import {Dispatch} from "redux";
import {ContactsAction} from "@/types/ContactsAction";
import {Contact} from "@/types/Contact";

axios.defaults.baseURL = "https://63e11987dd7041cafb41000c.mockapi.io";

export const fetchContacts = () => async (dispatch: Dispatch<ContactsAction>) => {
    try {
        const response = await axios.get("/contacts");
        dispatch({type: "contacts/getContacts", payload: response.data as Contact[]});
    } catch (e) {
        console.log(e);
    }
};
