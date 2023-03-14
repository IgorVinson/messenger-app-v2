import React from 'react';
import {Box, TextField} from "@mui/material";
import MyButton from "@/components/ui/myButton";


import {useSelector} from "react-redux";
import {socket} from "@/utils/socketConnect";

const SendMessageForm = () => {
    const [message_text, setTextMessage] = React.useState('');
    const sender_id = useSelector((state: any) => state.user.id);
    const receiver_id = useSelector((state: any) => state.user.selectedContact);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            const message = {
                sender_id,
                receiver_id,
                message_text
            }
            socket.emit('message', message);
            setTextMessage('');
        }
    };

    return (
        <Box sx={{
            position: 'relative',
            margin: '10px',
        }}>
            <TextField
                fullWidth id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={message_text}
                onChange={(e) => setTextMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            {/*<Box sx={{*/}
            {/*    position: 'absolute',*/}
            {/*    top: '50%',*/}
            {/*    right: '0',*/}
            {/*    transform: 'translateY(-50%)',*/}
            {/*}}>*/}
            {/*    <MyButton title={'sms'}/>*/}
            {/*</Box>*/}

        </Box>
    );
};

export default SendMessageForm;