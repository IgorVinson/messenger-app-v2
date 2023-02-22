import React from 'react';
import {Container} from "@mui/material";
import {GoogleLogin} from "@react-oauth/google";
import axios from 'axios';
import SetHostname from "@/config";

interface GoogleLoginProps {
    setLogin: (value: React.SetStateAction<boolean>) => void
}

const GoogleLoginBTN = ({setLogin}: GoogleLoginProps) => {
    const baseURL = SetHostname()
    const handleGoogleLogin = async (credentialResponse: any ) => {
        try {
            const response = await axios.post(`${baseURL}/google-login`, {
                credential: credentialResponse.credential,
                select_by: 'btn'
            });
            const { name, email } = response.data;
            // do something with the name and email, e.g. update the UI
            setLogin(true)
        } catch (error) {
            // handle error
        }
    };

    return (
        <Container sx={{display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
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