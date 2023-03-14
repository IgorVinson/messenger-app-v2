import React, {useEffect} from 'react';
import {Box, Paper} from "@mui/material";
import Message from "@/components/ui/message";
import SendMessageForm from "@/components/SendMessageForm";
import {socket} from "@/utils/socketConnect";
import axios from "axios";
import {useSelector} from "react-redux";

const MessagesField = () => {
    const [messages, setMessages] = React.useState([]);
    const sender_id = useSelector((state: any) => state.user.id);
    const receiver_id = useSelector((state: any) => state.user.selectedContact);

    useEffect(() => {
        if (receiver_id === null) return
        console.log('RERENDER')

        async function fetchMessages() {
            const response = await axios.get(`http://localhost:8080/messages?sender_id=${sender_id}&receiver_id=${receiver_id}`);
            setMessages(response.data);
        }

        fetchMessages();
    }, [sender_id, receiver_id])

    socket.on('message', (data) => {
        // @ts-ignore
        setMessages([...messages, data]);
    })


    return (
        <Paper sx={{minHeight: '500px', display: 'flex',flexDirection: 'column', justifyContent: 'space-between'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%'}}>
                {messages.map((message: any, i) => (
                    <Message key={i} text={message.message_text} sender_id={message.sender_id}/>
                ))}
            </Box>
            <Box sx={{alignSelf: 'flex-end', width:'100%'}}>
                <SendMessageForm/>
            </Box>
        </Paper>
    );
};

export default MessagesField;