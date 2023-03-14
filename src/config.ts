
export default function SetHostname() {
    let hostname: string = ''

        if (typeof window !== "undefined" && window.location.host === "messenger-app-v2.vercel.app") {
            hostname = 'https://messenger-servise.onrender.com'
        } else {
            hostname = 'http://localhost:8080'
        }

    return hostname
}


