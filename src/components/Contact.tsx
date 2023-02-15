import React from 'react';
import {Contact} from "@/types/Contact";
import {Container, Typography} from "@mui/material";

interface ContactProps {
    contact: Contact
}

const Contact: React.FC<ContactProps> = ({contact}) => {
    const {name, phone, email} = contact
    return (
        <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography>{name}</Typography>
            <Typography>{phone}</Typography>
            <Typography>{email}</Typography>
        </Container>
    );
};

export default Contact;
