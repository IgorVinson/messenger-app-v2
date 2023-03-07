import React, {useState} from 'react';
import {ThemeProvider} from "@mui/system";
import theme from "@/components/ui/theme";
import {Container, Paper, TextField, Typography} from "@mui/material";
import GoogleLoginBTN from "@/components/googleLoginBTN";
import Link from "next/link";
import MyButton from "@/components/ui/myButton";
import {loginUser} from "@/redux/userSlice";
import {useDispatch} from "react-redux";


const Login = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()


    const handleUser = () => {
        if (username === '' || email === '') {
            alert('Please fill username and email')
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(email)) {
            alert('Please enter a valid email address')
            return;
        }

        dispatch(loginUser({username, email}))
    }

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{width: '400px',}}>
                <Paper sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <TextField
                        id="outlined-password-input"
                        label="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <GoogleLoginBTN/>
                    <MyButton title={'login'} onClick={handleUser}/>
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
}

export default Login;