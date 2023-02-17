import React from 'react';
import {Button, Container, TextField} from "@mui/material";
import axios from "axios";
import setHostname from "@/config";


const SendMessage = () => {

    const baseURL = setHostname()
    console.log(baseURL)
    const [message, setMessage] = React.useState('');

    const toggleContact = () => {
        // @ts-ignore
        axios.post(`${baseURL}/api/messages`, {
                data: message,
            }
        ).then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            }
        );
        setMessage('')
    }

    return (
        <Container disableGutters sx={{display: 'flex', flexDirection: 'column'}}>
            <TextField fullWidth label="Send sms from twilio..." value={message}
                       onChange={(e) => setMessage(e.target.value)}/>
            <Button color={'primary'} onClick={toggleContact}>Send</Button>
        </Container>
    );
};

export default SendMessage;