import React, {useEffect} from 'react';
import {fetchContacts} from "@/redux/options";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {getContacts} from "@/redux/selectors";
import Contact from "@/components/Contact";
import {Container, Paper} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import theme from "@/components/layouts/Theme";
import AddContactModal from "@/components/layouts/AddContactModal";

const ContactList = () => {
    const dispatch: Dispatch = useDispatch()
    const contacts = useSelector(getContacts)

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchContacts())
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters sx={{display: 'flex', flexDirection: 'column'}}>
                {contacts.map((contact) => (
                    <Paper key={contact.id}>
                        <Contact contact={contact}/>
                    </Paper>
                ))}
                <AddContactModal/>
            </Container>
        </ThemeProvider>
    )
}

export default ContactList;
