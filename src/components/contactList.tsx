import React, {useEffect} from 'react';
import {fetchContacts} from "@/redux/options";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {Container, Paper, Typography} from "@mui/material";
import {ThemeProvider} from "@mui/system";
import theme from "@/components/ui/theme";
import AddContactModal from "@/components/ui/addContactModal";
import {fetchUsers} from "@/redux/usersListSlice";
import {State} from "@/types/State";

const ContactList = () => {
    const dispatch: Dispatch = useDispatch()

    const users = useSelector((state:State) => state.users.data)

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters sx={{display: 'flex', flexDirection: 'column'}}>
                {users.map((user: any) => (
                    <Paper key={user.id}>
                            <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                                borderBottom:'1px solid lightgrey'}}>
                                <Typography>{user.username}</Typography>
                                <Typography>{user.email}</Typography>
                            </Container>
                    </Paper>
                ))
                }
                <AddContactModal/>
            </Container>
        </ThemeProvider>
    )
}

export default ContactList;
