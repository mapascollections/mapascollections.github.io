'use client';
import React, { useState } from 'react';

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
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
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
