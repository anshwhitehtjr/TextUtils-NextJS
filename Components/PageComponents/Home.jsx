import React, { useState } from 'react';
import Alert from '../Alert';
import Form from '../HomeComponents/Form';

const Home = () => {
    const [alert, setAlert] = useState(null);

    const showAlert = (type, message) => {
        // Checks so that I still use bootstrap in tailwindcss
        if (type === 'success') { type = 'green'; }
        if (type === 'danger') { type = 'red'; }
        if (type === 'warning') { type = 'yellow'; }
        if (type === 'info') { type = 'blue'; }

        setAlert({
            message: message,
            type: type
        });
        setTimeout(() => {
            setAlert(null);
        }, 5000);
    };

    return (
        <>
            <Alert alert={ alert } />
            <Form showAlert={ showAlert } />
        </>
    );
};

export default Home;
