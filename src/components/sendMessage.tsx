import React from 'react';
import {Container, TextField} from "@mui/material";
import axios from "axios";
import SetHostname from "@/config";
import MyButton from "@/components/ui/myButton";
import theme from "@/components/ui/theme";
import {ThemeProvider} from "@mui/system";

const SendMessage = () => {

    const baseURL = SetHostname()
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
                <MyButton title={'Send'} onClick={toggleContact}/>
            </Container>
        </ThemeProvider>
    );
};

export default SendMessage;