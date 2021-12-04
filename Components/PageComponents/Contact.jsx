import React, { useContext, useState } from 'react';
import contactContext from '../Context/Contact/contactContext';

const Contact = () => {
    const context = useContext(contactContext);
    const { addContact } = context;
    const [contact, setContact] = useState({ name: '', email: "", desc: '' });

    const handleClick = e => {
        e.preventDefault();
        addContact(contact.name, contact.email, contact.desc);
        setContact({ name: "", email: "", desc: "" });
    };

    const onChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    return (
        <section className="text-gray-600 body-font relative">
            <form>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Please Contact TextUtils Admin if you have any queries or want to give us a feedback.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input onChange={ onChange } value={ contact.name } type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input onChange={ onChange } value={ contact.email } type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea onChange={ onChange } value={ contact.desc } id="message" name="desc" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                {
                                    !(contact.name.length < 3 || contact.desc.length < 5 || contact.email.length < 6)
                                        ? <button
                                            type='submit'
                                            className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg"
                                            onClick={ handleClick }>
                                            Submit
                                        </button>
                                        :
                                        <>
                                            <button
                                                id='w'
                                                type='submit'
                                                style={ { cursor: 'not-allowed' } }
                                                className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none rounded text-lg"
                                                title='Please fill the fields above to contact us'
                                                onClick={ handleClick }>
                                                Submit
                                            </button>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Contact;
