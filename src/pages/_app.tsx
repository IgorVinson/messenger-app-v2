import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import store from "@/redux/store";
import {GoogleOAuthProvider} from "@react-oauth/google";

export default function App({Component, pageProps}: AppProps) {

    return (
        <GoogleOAuthProvider clientId="127032363213-untatfs7l412h4jviqg40lkl12c22435.apps.googleusercontent.com">
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </GoogleOAuthProvider>
    )
}
