
import {User} from "@/types/User";
import SetHostname from "@/config";
import axios from "axios";

const hostname = SetHostname()

export const addUser = async (user: { email: any; username: any }) => {
    const response = await axios.post(`${hostname}/addUser`, user)
    return response.data
}