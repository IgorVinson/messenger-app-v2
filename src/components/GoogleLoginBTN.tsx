import { GoogleLogin } from 'react-google-login';
import { Button } from '@mui/material';

function GoogleAuthButton() {
    const handleSuccess = (response) => {
        // Handle successful authentication
        console.log(response);
    };

    const handleFailure = (error) => {
        // Handle authentication failure
        console.error(error);
    };

    return (
        <GoogleLogin
            clientId="your-google-client-id"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            render={(renderProps) => (
                <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    Sign in with Google
                </Button>
            )}
        />
    );
}

export default GoogleAuthButton;
