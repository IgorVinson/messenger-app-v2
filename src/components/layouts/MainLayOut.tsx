import * as React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {TextField} from "@mui/material";
import ContactList from "@/components/ContactList";

export const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MainLayOut() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={0.5} sx={{height: '100vh',}}>
                <Grid item xs={4}>
                    <Item sx={{height: '100%'}}>Contacts
                            <ContactList/>
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <Item sx={{
                        height: '100%', display: 'flex', flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <p>Messenger View</p>
                        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined"/>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}
