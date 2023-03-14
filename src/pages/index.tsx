import MainLayout from "@/components/ui/mainLayout";
import {useEffect, useState} from "react";
import Messenger from "@/pages/Messenger";
import Login from "@/pages/Login";
import {useSelector} from "react-redux";
import {getUserLogin} from "@/redux/selectors";


export default function Home() {
    const isLogin = useSelector(getUserLogin)

    const [showContactList, setShowContactList] = useState(true);

    const handleToggleContactList = () => {
        setShowContactList(!showContactList);
    };

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
