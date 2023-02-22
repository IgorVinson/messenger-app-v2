import Layout from "@/components/layouts/layout";
import {useState} from "react";
import Messenger from "@/pages/Messenger";
import Login from "@/pages/Login";


export default function Home() {

    const [isLogin, setIsLogin] = useState(false)
    const [showContactList, setShowContactList] = useState(true);
    const handleToggleContactList = () => {
        setShowContactList(!showContactList);
    };

    return (
        <>
            <Layout handleToggleContactList={handleToggleContactList} showContactList={showContactList}>
                {isLogin ? <Messenger
                    showContactList={showContactList}
                    setShowContactList={setShowContactList}
                    handleToggleContactList={handleToggleContactList}
                /> : <Login setLogin={setIsLogin}/>}
            </Layout>
        </>
    )
}
