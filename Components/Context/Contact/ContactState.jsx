import React, { useState } from 'react';
import contactContext from './contactContext';

const ContactState = (props) => {
    const host = "http://localhost:5000";
    const contactInitial = [];
    const [contacts, setContacts] = useState(contactInitial);

    const addContact = async (name, email, desc) => {
        // API Call 
        const response = await fetch(`${ host }/api/contact/addcontact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, desc })
        });

        const contact = await response.json();
        setContacts(contacts.concat(contact));
    };

    return (
        <contactContext.Provider value={ { addContact } } >
            { props.children }
        </contactContext.Provider>
    );
};

export default ContactState;
