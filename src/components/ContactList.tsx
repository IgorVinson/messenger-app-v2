import React, {useEffect} from 'react';
import {fetchContacts} from "@/redux/options";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {getContacts} from "@/redux/selectors";
import Contact from "@/components/Contact";
import {Container, Paper} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import theme from "@/components/layouts/Theme";
import BasicModal from "@/components/layouts/Modal";

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
                <BasicModal/>
            </Container>
        </ThemeProvider>
    )
}

export default ContactList;
