'use client';
import { useState } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white text-black px-4 py-2 flex items-center justify-between relative">
            <div style={{ paddingTop: "6px", paddingBottom: "6px", scale: 2 }} className="flex items-center gap-2">
                <img src="/imgs/logo.png" alt="Logo" className="h-10" />
            </div>
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-black focus:outline-none hover:text-yellow-400"
                >
                    <FaBars size={24} />
                </button>
            </div>
            <div
                className={`absolute top-16 left-0 w-full bg-white text-center md:relative md:top-0 md:w-auto md:bg-transparent md:flex flex-col md:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                <a
                    href="#about"
                    className="block py-2 md:py-0 md:inline-block text-lg hover:text-yellow-400 transition"
                >
                    ABOUT
                </a>
            </div>
            <div className="hidden md:flex">
                <button className="flex items-center gap-2 text-black hover:text-yellow-400 transition">
                    <FaUser size={18} />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
