import axios from "axios";
import SetHostname from "@/config";

const hostname = SetHostname()

export const getMessagesByContactHistory = async (senderID: string, recieverID:string ) => {
    const response = await axios.get(`${hostname}/getMessagesByContactHistory/${senderID}&&${recieverID}`)
    return response.data
}

