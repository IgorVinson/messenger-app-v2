import React, {useEffect} from 'react';
// import {fetchContacts} from "@/redux/options";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {Container} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import theme from "@/components/ui/theme";
import AddContactModal from "@/components/ui/addContactModal";
import {fetchContacts} from "@/redux/contactsListSlice";
import {State} from "@/types/State";
import {getUser} from "@/redux/selectors";
import Contact from "@/components/Contact";
import {selectContact} from "@/redux/userSlice";

const ContactsList = () => {
    const dispatch: Dispatch = useDispatch()

    const contacts = useSelector((state: State) => state.contacts.data)
    const currentUser = useSelector(getUser)

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleContact = (id:string) => {
        console.log('handleContact', id)
        dispatch(selectContact(id));
    }


    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters sx={{display: 'flex', flexDirection: 'column'}}>
                {contacts
                    .filter((contact: any) => contact.email !== currentUser.data.email)
                    .map((contact: any) => (
                        <Contact
                            key={contact.id}
                            contact={contact}
                            handleContact={handleContact}
                        />
                    ))
                }
                {/*<AddContactModal/>*/}
            </Container>
        </ThemeProvider>
    )
}

export default ContactsList;
