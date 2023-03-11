import React from 'react';
import {Container, Paper, Typography} from "@mui/material";
import {Contact} from "@/types/Contact";
import {useSelector} from "react-redux";

interface ContactProps {
    contact: Contact,
    handleContact: (id: string) => void
}

const Contact: React.FC<ContactProps> = ({contact, handleContact}) => {
    const selectedContact = useSelector((state: any) => state.user.selectedContact)
    console.log("test_brunch")
    return (
        <Paper key={contact.id}>
            <Container
                sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    borderBottom: '1px solid lightgrey',
                    backgroundColor: selectedContact === contact.id ? '#64748B' : 'white',
                    color: selectedContact === contact.id ? 'white' : 'black'
                }}
                onClick={() => handleContact(contact.id)}
            >
                <Typography>{contact.username}</Typography>
                <Typography>{contact.email}</Typography>
            </Container>
        </Paper>
    );
};

export default Contact;
