import React, {useEffect} from 'react';
import {fetchContacts} from "@/redux/options";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {getContacts} from "@/redux/selectors";
import {Item} from "@/components/layouts/MainLayOut";
import Contact from "@/components/Contact";

const ContactList = () => {
    const dispatch: Dispatch = useDispatch()
    const contacts = useSelector(getContacts)

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchContacts())
    }, [])

    console.log(contacts)
    return (
        <div>
            {contacts.map((contact) => (
                <Item key={contact.id}>
                    <Contact contact={contact}/>
                </Item>
            ))}
        </div>
    )
}

export default ContactList;
