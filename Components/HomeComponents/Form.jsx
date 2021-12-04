import { useState } from "react";
import React from 'react';

const Form = (props) => {

    // Changing To Uppercase
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    // Changing To Uppercase
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    // Changing To Nothing
    const handleClearText = () => {
        let newText = '';
        setText(newText);
    };

    // Changing To Nothing
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('success', 'Text Copied To Clipboard Successfully!');
    };  

    // Logic to change text in our textarea
    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState('');

    return (
        <div >
            <div className="bg-gradient-to-b from-blue-800 to-blue-600 h-96"></div>
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                    <p className="text-4xl font-bold leading-7 p-10 text-center">Welcome To TextUtils</p>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="font-semibold text-3xl leading-7">Enter the Text to analyze</label>
                            <textarea type="text" value={ text } onChange={ handleOnChange } className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        {
                            text.length === 0
                                ? <>
                                    <button style={ { cursor: "not-allowed" } } onClick={ handleUpperCase } className="mt-9 mx-1 font-semibold leading-none text-white py-4 px-10 bg-gray-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Convert to Uppercase
                                    </button>
                                    <button style={ { cursor: "not-allowed" } } onClick={ handleLowerCase } className="mt-9 mx-1 font-semibold leading-none text-white py-4 px-10 bg-gray-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Convert to Lowercase
                                    </button>
                                    <button style={ { cursor: "not-allowed" } } onClick={ handleClearText } className="mt-9 mx-1 font-semibold leading-none text-white py-4 px-10 bg-gray-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Clear Text
                                    </button>
                                </>

                                : <>
                                    <button onClick={ handleUpperCase } className="mt-9 mx-1 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded focus:ring-2 hover:bg-blue-600 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Convert to Uppercase
                                    </button>
                                    <button onClick={ handleLowerCase } className="mt-9 mx-1 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded focus:ring-2 hover:bg-blue-600 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Convert to Lowercase
                                    </button>
                                    <button onClick={ handleClearText } className="mt-9 mx-1 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded focus:ring-2 hover:bg-blue-600 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                        Clear Text
                                    </button>
                                </>
                        }
                    </div>
                    <div className="flex items-center justify-center w-full">
                        {
                            text.length === 0
                                ? <button style={ { cursor: "not-allowed" } } onClick={ handleCopy } className="mt-9 mx-1 font-semibold leading-none text-white py-4 px-10 bg-gray-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Copy To Clipboard
                                </button>
                                : <button onClick={ handleCopy } className="mt-9 mx-1 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded focus:ring-2 hover:bg-blue-600 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Copy To Clipboard
                                </button>
                        }
                    </div>
                    <hr className="my-10" />
                    <div id="previewBox" className="my-10">
                        <p className="text-2xl leading-none font-semibold" >Preview</p>
                        <p className="text-xl pt-3 leading-none font-normal" >
                            {
                                text.trim() === ''
                                    ? 'Please Enter The Text In the Textbox to preview it'
                                    : text
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
