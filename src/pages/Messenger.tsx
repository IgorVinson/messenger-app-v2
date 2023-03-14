import * as React from 'react';
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";
import ContactsList from "@/components/ContactsList";
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import {useEffect, useState} from 'react';
import MyButton from "@/components/ui/myButton";
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
            <Container sx={{}}>
                <Grid container spacing={0.5}>
                    <Grid item lg={3} md={4} sm={4} xs={12}
                          >
                            <ContactsList/>
                            {/*<SendMessage/>*/}
                    </Grid>
                    <Grid item lg={9} md={8} sm={8} xs={12}>
                            <MessagesField/>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
