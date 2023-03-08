import React from 'react';
import {Container} from "@mui/material";
import {GoogleLogin} from "@react-oauth/google";
import axios from 'axios';
import SetHostname from "@/config";
import {useDispatch} from "react-redux";
import {loginUser} from "@/redux/userSlice";


const GoogleLoginBTN = () => {

    // const avatarName = useSelector((state: any) => state.user.name)
    // console.log(avatarName)

    const dispatch = useDispatch()

    const baseURL = SetHostname()
    const handleGoogleLogin = async (credentialResponse: any ) => {
        try {
            const response = await axios.post(`${baseURL}/google-login`, {
                credential: credentialResponse.credential,
                select_by: 'btn'
            });
            console.log(response);
            const { name, email } = response.data;

            // do something with the name and email, e.g. update the UI
            dispatch(loginUser({username:name,email}))
        } catch (error) {
            // handle error
        }
    };

    return (
        <Container sx={{display: 'flex',justifyContent: 'center', paddingTop: '10px' }}>
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