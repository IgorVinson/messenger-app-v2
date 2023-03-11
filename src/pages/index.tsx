import MainLayout from "@/components/ui/mainLayout";
import {useEffect, useState} from "react";
import Messenger from "@/pages/Messenger";
import Login from "@/pages/Login";
import {useSelector} from "react-redux";
import {getUserLogin} from "@/redux/selectors";
import io from "socket.io-client";

const socket = io('http://localhost:8080');

export default function Home() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const isLogin = useSelector(getUserLogin)

    console.log('WebSocket connected: ', isConnected);

    const [showContactList, setShowContactList] = useState(true);
    const [lastPong, setLastPong] = useState(null);

    const handleToggleContactList = () => {
        setShowContactList(!showContactList);
    };

    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('message', (data) => {
            console.log('Message from server: ', data);
        })

        socket.emit('message', 'Hello, server!');

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };
    }, []);

    return (
        <>
            <MainLayout
                handleToggleContactList={handleToggleContactList}
                showContactList={showContactList}>
                {isLogin ? <Messenger
                    showContactList={showContactList}
                    setShowContactList={setShowContactList}
                    handleToggleContactList={handleToggleContactList}
                /> : <Login/>}
            </MainLayout>
        </>
    )
}
