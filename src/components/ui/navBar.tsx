import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import theme from "@/components/ui/theme";
import {ThemeProvider} from "@mui/system";
import MyButton from "@/components/ui/myButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Avatar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getUserLogin} from "@/redux/selectors";
import {logoutUser} from "@/redux/userSlice";

interface NavBarProps {
    showContactList: boolean;
    handleToggleContactList: () => void;
}

export default function NavBar({showContactList, handleToggleContactList}: NavBarProps) {
    const isLogin = useSelector(getUserLogin)
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    }
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
                        {isLogin &&
                            <>
                                <MyButton title={'logout'}
                                          onClick={logout}
                                          justifyContent={'flex-end'}/>
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"/>
                            </>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
}