import React from 'react';
import {Container} from "@mui/material";
import {GoogleLogin} from "@react-oauth/google";
import axios from 'axios';
import SetHostname from "@/config";
import {useDispatch} from "react-redux";
import {loginUser} from "@/redux/userSlice";
import {addUser} from "@/queriesToDB/addUser";


const GoogleLoginBTN = () => {

    const dispatch = useDispatch()

    const baseURL = SetHostname()
    const handleGoogleLogin = async (credentialResponse: any) => {
        try {
            const response = await axios.post(`${baseURL}/google-login`, {
                credential: credentialResponse.credential,
                select_by: 'btn'
            });
            const {name, email} = response.data;
            const user = {username: name, email}
            const recievedUser = await addUser(user)
            // do something with the name and email, e.g. update the UI
            dispatch(loginUser(recievedUser))
        } catch (error) {
            // handle error
        }
    };

    return (
        <Container sx={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    handleGoogleLogin(credentialResponse)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </Container>
    );
};

export default GoogleLoginBTN;