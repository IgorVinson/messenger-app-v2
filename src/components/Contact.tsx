import React from 'react';
import {Contact} from "@/types/Contact";

interface ContactProps {
    contact: Contact
}

const Contact: React.FC<ContactProps> = ({contact}) => {
    const {name, phone, email} = contact
    return (
        <div>
           <p>{name}</p>
              <p>{phone}</p>
                <p>{email}</p>
        </div>
    );
};

export default Contact;
