import React from 'react';
import {Contact} from "@/types/Contact";
import {Container, Typography} from "@mui/material";
import {User} from "@/types/User";

interface ContactProps {
    user: User
}

const Contact: React.FC<ContactProps> = ({user: User}) => {
    // @ts-ignore
    const {username, email} = User;

    return (
        <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',
            borderBottom:'1px solid lightgrey'}}>
            <Typography>{username}</Typography>
            <Typography>{email}</Typography>
        </Container>
    );
};

export default Contact;
