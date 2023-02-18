import {useEffect, useState} from "react";

export default function SetHostname() {
    const [hostname, setHostName] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined" && window.location.host === "messenger-app-v2.vercel.app") {
            setHostName('https://messenger-servise.onrender.com');
        } else {
            setHostName('http://localhost:8080');
        }
    }, []);

    return hostname
}


