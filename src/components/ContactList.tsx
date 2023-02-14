import React, {useEffect} from 'react';
import {addContact, fetchContacts} from "@/redux/options";
import {useDispatch, useSelector} from "react-redux";
import {AnyAction, Dispatch} from "redux";
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

    const [isOpen, setIsOpen] = React.useState(false);
    const [contact, setContact] = React.useState({
        name: '',
        phone: '',
        email: '',
    });

    const toggleContact = () => {
        setIsOpen(!isOpen)
    }

    const saveContact = () => {
        // @ts-ignore
        dispatch(addContact(contact))
        setIsOpen(false)
        setContact({
            name: '',
            phone: '',
            email: '',
        })
    }

    return (
        <div>
            {contacts.map((contact) => (
                <Item key={contact.id}>
                    <Contact contact={contact}/>
                </Item>
            ))}
            <button onClick={toggleContact}>Add</button>
            {isOpen && <div>
                <input type="text" placeholder="Name" value={contact.name}
                       onChange={(e) => setContact({...contact, name: e.target.value})}/>
                <input type="text" placeholder="Phone" value={contact.phone}
                       onChange={(e) => setContact({...contact, phone: e.target.value})}/>
                <input type="text" placeholder="Email" value={contact.email}
                       onChange={(e) => setContact({...contact, email: e.target.value})}/>
                <button onClick={saveContact}>Save</button>
            </div>}
        </div>
    )
}

export default ContactList;
