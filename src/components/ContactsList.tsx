import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {Container} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import theme from "@/components/ui/theme";
import {fetchContacts} from "@/redux/contactsListSlice";
import {State} from "@/types/State";
import {getUser} from "@/redux/selectors";
import Contact from "@/components/Contact";
import {selectContact} from "@/redux/userSlice";
import Box from "@mui/material/Box";

const ContactsList = () => {
    const dispatch: Dispatch = useDispatch()

    const contacts = useSelector((state: State) => state.contacts.data)
    const currentUser = useSelector(getUser)

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleContact = (id: string) => {
        dispatch(selectContact(id));
    }

    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {contacts
                    .filter((contact: any) => contact.email !== currentUser.email)
                    .map((contact: any) => (
                        <Contact
                            key={contact.id}
                            contact={contact}
                            handleContact={handleContact}
                        />
                    ))
                }
                {contacts.length === 1 && <Box sx={{textAlign: 'center'}}>no contacts yet</Box>}
                {/*<AddContactModal/>*/}
            </Container>

        </ThemeProvider>
    )
}

export default ContactsList;
