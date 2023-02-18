import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import theme from "@/components/layouts/Theme";
import {ThemeProvider} from "@mui/system";
import MyButton from "@/components/layouts/MyButton";
import useMediaQuery from "@mui/material/useMediaQuery";

interface NavBarProps {
    showContactList: boolean;
    handleToggleContactList: () => void;
}

export default function NavBar({showContactList, handleToggleContactList}: NavBarProps) {
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{flexGrow: 1, marginBlock: '5px'}}>
                <AppBar position="static" color={'primary'}>
                    <Toolbar>
                        {!isSM
                            ?
                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{mr: 2}}
                                >
                                    Messenger
                                </IconButton>

                            : <MyButton
                                onClick={handleToggleContactList}
                                title={showContactList ? 'Hide contact list' : '...'}
                                justifyContent={'flex-start'}
                            />
                        }
                        <MyButton title={'Login'}
                                  onClick={() => console.log('login')}
                                  justifyContent={'flex-end'}/>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}