import React from 'react';
import {Container, Paper, TextField, Typography} from "@mui/material";
import MyButton from "@/components/layouts/MyButton";
import Link from "next/link";
import {ThemeProvider} from "@mui/system";
import theme from "@/components/layouts/Theme";

const Login = () => {

    const handleLogin = () => {
        console.log('login')
    }

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{width: '40%'}}>
                <Paper sx={{display: 'flex', flexDirection: 'column'}}>
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
                    <MyButton title={'login'} onClick={handleLogin}/>
                    <Typography align={'center'} style={{paddingTop: 10}} >
                        Not a member? &nbsp;
                        <Link style={{textDecoration: 'none', color: '#64748B'}} href={''}>
                            Sign up
                        </Link>
                    </Typography>
                    <Typography textTransform={'none'} align={'center'} style={{paddingTop: 10}}>
                    <Link style={{textDecoration: 'none', color: '#64748B', }} href={''}>
                        Forgot password?
                    </Link>
                    </Typography>
                </Paper>
            </Container>
        </ThemeProvider>

    );
};

export default Login;