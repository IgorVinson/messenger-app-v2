import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container, TextField, Typography} from "@mui/material";
import ContactList from "@/components/contactList";
import SendMessage from "@/components/sendMessage";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import {useEffect} from 'react';
import MyButton from "@/components/layouts/myButton";

interface MessengerProps {
    handleToggleContactList: () => void;
    showContactList: boolean;
    setShowContactList: (showContactList: boolean) => void;
}

export default function Messenger({handleToggleContactList, showContactList, setShowContactList}: MessengerProps) {
    const theme = useTheme();
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    // const [showContactList, setShowContactList] = useState(true);


    useEffect(() => {
        if (isSM) {
            setShowContactList(false);
        } else {
            setShowContactList(true);
        }
    }, [isSM])


    return (
        <Container sx={{display: 'flex', flexDirection: 'column'}}>
            <Grid container spacing={0.5}>
                <Grid item lg={3} md={4} sm={4} xs={12}
                      sx={{display: showContactList ? 'inline' : 'none'}}>
                    <Paper
                        style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="h6" style={{paddingTop: 10}}>
                            Contact list
                        </Typography>
                        <ContactList/>
                        <SendMessage/>
                    </Paper>
                </Grid>
                <Grid item lg={9} md={8} sm={8} xs={12}>
                    <Paper
                        style={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography variant="h6" style={{paddingTop: 10}}>
                            Messenger View
                        </Typography>
                        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined"/>
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