import React from 'react';
import {ThemeProvider} from "@mui/system";
import theme from "@/components/layouts/theme";
import {Container, Paper, TextField, Typography} from "@mui/material";
import GoogleLoginBTN from "@/components/googleLoginBTN";
import Link from "next/link";


interface LoginProps {
    setLogin: (value: React.SetStateAction<boolean>) => void
}
const Login = ({setLogin}: LoginProps) => {

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{width: '40%',}}>
                <Paper sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Email"
                        type="email"
                        autoComplete="current-password"
                    />
                    <GoogleLoginBTN setLogin={setLogin}/>
                    <Typography align={'center'} style={{paddingTop: 10}}>
                        Not a member? &nbsp;
                        <Link style={{textDecoration: 'none', color: '#64748B'}} href={''}>
                            Sign up
                        </Link>
                    </Typography>
                    <Typography textTransform={'none'} align={'center'} style={{paddingTop: 10}}>
                        <Link style={{textDecoration: 'none', color: '#64748B',}} href={''}>
                            Forgot password?
                        </Link>
                    </Typography>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default Login;