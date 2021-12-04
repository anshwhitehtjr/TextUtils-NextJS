import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    let router = useRouter();

    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 md:mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">TextUtils</span>
                </a>
                <nav id='home' className="mx-2 flex flex-wrap text-base justify-center">
                    <Link href='/' className="mr-5 hover:text-white">Home</Link>
                </nav>
                <nav className="mx-2 flex flex-wrap text-base justify-center">
                    <Link href='/contact' className="mr-5 hover:text-white">Contact</Link>
                </nav>
                <nav className="mx-2 flex flex-wrap text-base justify-center">
                    <Link href='/about' className="mr-5 hover:text-white">About</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

// <div className="w-full h-0.5 group-hover:bg-purple-500 transition-al bg-transparent absolute bottom-0" />