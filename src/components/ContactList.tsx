import React, {useEffect} from 'react';
import {addContact, fetchContacts} from "@/redux/options";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {getContacts} from "@/redux/selectors";
import Contact from "@/components/Contact";
import {Button, Card, Container, Paper, TextField, Typography} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import theme from "@/components/layouts/Theme";
import MyButton from "@/components/layouts/MyButton";

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
        <ThemeProvider theme={theme}>
            <Container disableGutters sx={{display: 'flex', flexDirection: 'column'}}>
                {contacts.map((contact) => (
                    <Paper key={contact.id}>
                        <Contact contact={contact}/>
                    </Paper>
                ))}
                <MyButton title={'Add'} onClick={toggleContact}/>
                {isOpen && <Container disableGutters sx={{display: 'flex', flexDirection: 'column'}}>
                    <TextField fullWidth label="Name" value={contact.name}
                               onChange={(e) => setContact({...contact, name: e.target.value})}/>
                    <TextField fullWidth label="Phone" value={contact.phone}
                               onChange={(e) => setContact({...contact, phone: e.target.value})}/>
                    <TextField fullWidth label="Email" value={contact.email}
                               onChange={(e) => setContact({...contact, email: e.target.value})}/>
                    <MyButton title={'Save'} onClick={saveContact}/>
                </Container>}
            </Container>
        </ThemeProvider>
    )
}

export default ContactList;
