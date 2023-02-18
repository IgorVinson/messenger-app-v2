import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container, TextField, Typography} from "@mui/material";
import ContactList from "@/components/ContactList";
import NavBar from "@/components/layouts/NavBar";
import SendMessage from "@/components/SendMessage";


export default function MainLayOut() {
    return (
        <Container>
            <NavBar/>
            <Grid container spacing={0.5} sx={{height: '100vh',}}>
                <Grid item xs={4}>
                    <Paper sx={{
                        height: '100%', width: '100%', display: 'flex', flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Typography>Contact list</Typography>
                        <ContactList/>
                        <SendMessage/>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper sx={{
                        height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Typography>Messenger View</Typography>
                        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined"/>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
