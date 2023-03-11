import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Box, Container, TextField, Typography} from "@mui/material";
import ContactsList from "@/components/ContactsList";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import {useEffect, useState} from 'react';
import MyButton from "@/components/ui/myButton";
import Message from "@/components/ui/message";
import {addUser} from "@/queriesToDB/addUser";
import {useSelector} from "react-redux";
import {getUser} from "@/redux/selectors";
import {ThemeProvider} from "@mui/system";
import actualTtheme from "@/components/ui/theme";


interface MessengerProps {
    handleToggleContactList: () => void;
    showContactList: boolean;
    setShowContactList: (showContactList: boolean) => void;
}

export default function Messenger({handleToggleContactList, showContactList, setShowContactList}: MessengerProps) {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const user = useSelector(getUser)

    useEffect(() => {
        if (isSM) {
            setShowContactList(false);
        } else {
            setShowContactList(true);
        }
        addUser(user.data)
    }, [isSM])

    const [message, setMessage] = useState('');

    const handleMessageChange = (event: any) => {
        setMessage(event.target.value);
    };


    return (
        <ThemeProvider theme={actualTtheme}>
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
                            <ContactsList/>
                            {/*<SendMessage/>*/}
                        </Paper>
                    </Grid>
                    <Grid item lg={9} md={8} sm={8} xs={12}>
                        <Paper
                            style={{
                                height: '100%',
                                position: 'relative',
                                justifyContent: 'flex-end',
                            }}
                        >
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
        </ThemeProvider>
    );
}
