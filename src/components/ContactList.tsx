import React, {useEffect} from 'react';
import {fetchContacts} from "@/redux/options";
import {useDispatch} from "react-redux";

const dispatch = useDispatch();
//function fetchContacts(): (dispatch: Dispatch<ContactsAction>) => Promise<void>

const ContactList = () => {
    useEffect(() => {
        dispatch(fetchContacts())
    }, [])
    }
    return (
        <div>

        </div>
    );
};

export default ContactList;
