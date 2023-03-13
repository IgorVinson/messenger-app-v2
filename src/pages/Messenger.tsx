import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import ContactsList from "@/components/ContactsList";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import {useEffect, useState} from 'react';
import MyButton from "@/components/ui/myButton";
import {addUser} from "@/queriesToDB/addUser";
import {useSelector} from "react-redux";
import {getUser} from "@/redux/selectors";
import {ThemeProvider} from "@mui/system";
import actualTtheme from "@/components/ui/theme";
import MessagesField from "@/components/MessagesField";

interface MessengerProps {
    handleToggleContactList: () => void;
    showContactList: boolean;
    setShowContactList: (showContactList: boolean) => void;
}

export default function Messenger({handleToggleContactList, showContactList, setShowContactList}: MessengerProps) {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        if (isSM) {
            setShowContactList(false);
        } else {
            setShowContactList(true);
        }
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
                            <MessagesField/>
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
