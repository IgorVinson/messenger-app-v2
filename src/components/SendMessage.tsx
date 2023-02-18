import React from 'react';
import {Button, Container, TextField} from "@mui/material";
import axios from "axios";
import setHostname from "@/config";
import MyButton from "@/components/layouts/MyButton";
import theme from "@/components/layouts/Theme";
import {ThemeProvider} from "@mui/system";

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
        <ThemeProvider theme={theme}>
            <Container disableGutters sx={{display: 'flex', flexDirection: 'column'}}>
                <TextField fullWidth label="Send sms from twilio..." value={message}
                           onChange={(e) => setMessage(e.target.value)}/>
                <MyButton title={'Save'} onClick={toggleContact}/>
            </Container>
        </ThemeProvider>
    );
};

export default SendMessage;