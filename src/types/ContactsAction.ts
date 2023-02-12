import {Contact} from "@/types/Contact";

export type ContactsAction =
    | { type: 'contacts/getContacts', payload: Contact[] }
    | { type: 'contacts/addContact', payload: Contact }
    | { type: 'contacts/updateContact', payload: Contact }
    | { type: 'contacts/deleteContact', payload: Contact['id'] };
