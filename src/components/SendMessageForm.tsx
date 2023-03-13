import React from 'react';
import {Box, TextField} from "@mui/material";
import MyButton from "@/components/ui/myButton";
import {socket} from "@/pages";

const SendMessageForm = () => {
    const [textMessage, setTextMessage] = React.useState('');

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            socket.emit('message', textMessage);
        }
    };


    return (
        <>
            <TextField
                fullWidth id="outlined-basic"
                label="Outlined"
                variant="outlined"
                sx={{position: 'absolute', bottom: 0, left: 0, right: 0}}
                value={textMessage}
                onChange={(e) => setTextMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Box sx={{position: 'absolute', bottom: '5px', right: '-15px'}}><MyButton title={'sms'}/></Box>
        </>
    );
};

export default SendMessageForm;