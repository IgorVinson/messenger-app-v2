import io from "socket.io-client";
import SetHostname from "@/config";

const hostname = SetHostname()

export const socket = io(`${hostname}`, {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": "abcd"
    }
});