"use client"
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-10">
            <div className="px-6 py-4 flex justify-between items-center bg-gray-400">
                <div className="text-2xl font-bold z-10">Logo</div>
                <div className="flex items-center z-10 md:hidden">
                    <button type="button" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                                <path d="M18 6 6 18"/>
                                <path d="m6 6 12 12"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                                <line x1="4" x2="20" y1="12" y2="12"/>
                                <line x1="4" x2="20" y1="6" y2="6"/>
                                <line x1="4" x2="20" y1="18" y2="18"/>
                            </svg>
                        )}
                    </button>
                </div>
                <div className="hidden md:flex items-center">
                    <a href="/" className="mx-2 text-gray-50 hover:text-gray-300">Home</a>
                    <a href="/components" className="mx-2 text-gray-50 hover:text-gray-300">Components</a>
                    <a href="/contact" className="mx-2 text-gray-50 hover:text-gray-300">Contact</a>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-400 flex items-center justify-center md:hidden">
                    <ul>
                        <li className="my-2">
                            <a href="/" className="text-gray-50 hover:text-gray-300">Home</a>
                        </li>
                        <li className="my-2">
                            <a href="/components" className="text-gray-50 hover:text-gray-300">Components</a>
                        </li>
                        <li className="my-2">
                            <a href="/contact" className="text-gray-50 hover:text-gray-300">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;