import {Contact} from "@/types/Contact";
import {User} from "@/types/User";
import {Message} from "@/types/Message";

export interface State {

    contacts: Contact[],
    user: User,
    messages: Message[],
}

