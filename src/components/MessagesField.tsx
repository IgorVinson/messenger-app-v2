import React from 'react';
import {Box, TextField} from "@mui/material";
import Message from "@/components/ui/message";
import MyButton from "@/components/ui/myButton";
import {socket} from "@/pages";
import {useSelector} from "react-redux";

const MessagesField = () => {
    const [textMessage, setTextMessage] = React.useState('');
    const sender_id = useSelector(state => state.user.email)
    const receiver_id = useSelector(state => state.user.selectedContact)
    console.log('sender_id', sender_id)
    console.log('receiver_id', receiver_id)

    const sendMessage = () => {
        const message = {
            sender_id,
            receiver_id,
            text: textMessage,
        }
        socket.emit('message', message)
    }

    return (
       <>
           <Box sx={{flex: 'auto', display: 'flex', flexDirection: 'column',}}>
               <Message text={'This is test message'}/>
               <Message text={'This is test message'}/>
               <Message text={'This is test message'}/>
               <Message text={'This is test message'}/>
           </Box>
           <TextField
               fullWidth id="outlined-basic"
               label="Outlined"
               variant="outlined"
               sx={{position: 'absolute', bottom: 0, left: 0, right: 0}}
           />
           <Box sx={{position: 'absolute', bottom: '5px', right: '-15px'}}><MyButton title={'sms'}/></Box>
       </>
    );
};

export default MessagesField;