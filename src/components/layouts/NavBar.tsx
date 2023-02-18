import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import theme from "@/components/layouts/Theme";
import {ThemeProvider} from "@mui/system";
import MyButton from "@/components/layouts/MyButton";

export default function NavBar() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{flexGrow: 1, marginBlock: '5px'}}>
                <AppBar position="static" color={'primary'}>
                    <Toolbar>
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                        </IconButton>
                        <Typography sx={{flexGrow: 1}}>
                            Messenger
                        </Typography>
                        <MyButton title={'Login'}
                                  onClick={() => console.log('login')}
                                  justifyContent={'flex-end'}/>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}