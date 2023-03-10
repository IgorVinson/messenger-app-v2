import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Box, Container, TextField, Typography} from "@mui/material";
import UsersList from "@/components/usersList";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import {useEffect, useState} from 'react';
import MyButton from "@/components/ui/myButton";
import Message from "@/components/ui/message";
import io from 'socket.io-client';
import {addUser} from "@/queriesToDB/addUser";
import {useSelector} from "react-redux";
import {getUser} from "@/redux/selectors";

export const socket = io('http://localhost:8080');

interface MessengerProps {
    handleToggleContactList: () => void;
    showContactList: boolean;
    setShowContactList: (showContactList: boolean) => void;
}

export default function Messenger({handleToggleContactList, showContactList, setShowContactList}: MessengerProps) {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const user = useSelector(getUser)
    console.log('user', user)

    useEffect(() => {
        if (isSM) {
            setShowContactList(false);
        } else {
            setShowContactList(true);
        }
        addUser(user.data)
    }, [isSM])

    const [message, setMessage] = useState('');

    const handleMessageChange = (event:any) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = () => {
        socket.emit('chat-message', message);
        setMessage('');
    };

    return (
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
            <Grid container spacing={0.5}>
                <Grid item lg={3} md={4} sm={4} xs={12}
                      sx={{display: showContactList ? 'inline' : 'none'}}>
                    <Paper
                        style={{
                            minHeight: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'start',
                        }}
                    >
                        <Typography variant="h6" style={{paddingTop: 10}}>
                            Users list
                        </Typography>
                        <UsersList/>
                        {/*<SendMessage/>*/}
                    </Paper>
                </Grid>
                <Grid item lg={9} md={8} sm={8} xs={12}>
                    <Paper
                        style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="h6" style={{paddingTop: 10}}>
                            Messenger View
                        </Typography>

                        <Box sx={{flex: 'auto', display: 'flex', flexDirection: 'column',}}>
                            <Message text={'This is test message'}/>
                            <Message text={'This is test message'}/>
                            <Message text={'This is test message'}/>
                        </Box>

                        <TextField  fullWidth id="outlined-basic" label="Outlined"
                                   variant="outlined"/>
                        {/*<input type="text" value={message} onChange={handleMessageChange} />*/}
                        {/*<button onClick={handleSendMessage}>Send Message</button>*/}
                        {isSM && (
                            <MyButton
                                onClick={handleToggleContactList}
                                title={showContactList ? 'Hide contact list' : 'Show contact list'}
                            />
                        )}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
