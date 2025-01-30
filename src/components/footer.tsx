'use client';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
        }
    };

    return (
        <div className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                    <div className="mb-6 sm:mb-0 sm:w-1/3 text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-[#ed463f]">Mapas Collections</h3>
                        <p className="text-sm">One-stop shop for awesome products!</p>
                    </div>
                    <div className="flex gap-4 sm:w-1/3 justify-center sm:justify-end">
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition duration-300 p-2 rounded-full bg-gray-100 hover:bg-blue-100">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-pink-500 transition duration-300 p-2 rounded-full bg-gray-100 hover:bg-pink-100">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-green-500 transition duration-300 p-2 rounded-full bg-gray-100 hover:bg-green-100">
                            <FaWhatsapp size={20} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-red-600 transition duration-300 p-2 rounded-full bg-gray-100 hover:bg-red-100">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-4 mt-4 text-center">
                    <p className="text-sm">&copy; 2025 Mapas Collections. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
