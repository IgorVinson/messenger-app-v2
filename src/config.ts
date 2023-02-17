import {useEffect, useState} from "react";

export default function setHostname() {
    const [hostname, setHostname] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined" && window.location.host === "messenger-app-v2.vercel.app") {
            setHostname('https://messenger-servise.onrender.com');
        } else {
            setHostname('http://localhost:8080');
        }
    }, []);

    return hostname
}


