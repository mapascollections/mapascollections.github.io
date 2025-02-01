'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white text-black px-4 py-2 flex items-center justify-between relative">
            <Link href="/" style={{ paddingTop: "6px", paddingBottom: "6px", scale: 2 }} className="flex items-center gap-2">
                <Image src="/imgs/logo.webp" alt="Logo" className="h-10" width={50} height={50} />
            </Link>
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-black focus:outline-none hover:text-yellow-400"
                    aria-label="menubar" aria-labelledby="menubarmobile"
                >
                    <FaBars size={24} />
                </button>
            </div>
            <div
                className={`absolute top-16 left-0 w-full bg-white text-center md:relative md:top-0 md:w-auto md:bg-transparent md:flex flex-col md:flex-row ${isMenuOpen ? 'block' : 'hidden'}`}
            >
                <Link
                    href=""
                    className="block py-2 md:py-0 md:inline-block text-lg transition hover:text-[#cb6968]"
                >
                    ABOUT
                </Link>&nbsp;&nbsp;&nbsp;
                <Link
                    href="/events"
                    className="block py-2 md:py-0 md:inline-block text-lg transition hover:text-[#cb6968]"
                >
                    EVENTS
                </Link>&nbsp;&nbsp;&nbsp;
            </div>

        </nav>
    );
};

export default NavBar;
