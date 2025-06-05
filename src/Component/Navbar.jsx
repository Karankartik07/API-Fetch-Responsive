import React, { useState } from 'react';

export default function Navbar() {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    };

    return (
        <div className="relative">

            <div className="bg-black text-white flex justify-between items-center p-4 px-[25px]">
                <p className="text-xl">API Data</p>


                <ul className="hidden lg:flex gap-6">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Profile</li>
                </ul>


                <i
                    className={`text-2xl bi ${show ? 'bi-x' : 'bi-list'} cursor-pointer lg:hidden`}
                    onClick={toggleMenu}
                ></i>
            </div>


            <div
                className={`fixed top-16 left-0 h-full w-[50%] bg-[#2c2c2c] text-white z-50 transition-transform duration-300 ease-in-out lg:hidden ${show ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4">
                    <ul className="space-y-4 text-lg">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Profile</li>
                    </ul>
                </div>
            </div>


            {show && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
                    onClick={toggleMenu}
                ></div>
            )}
        </div>
    );
}
