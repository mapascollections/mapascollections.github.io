'use client';
import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: any) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail('');
        }
    };

    return (
        <div className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                    <h4 className="text-lg font-semibold text-center sm:text-left sm:w-1/3">
                        Subscribe to our Newsletter
                    </h4>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row justify-center sm:w-2/3 mt-4 sm:mt-0">
                        <div className="flex w-full sm:w-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-l-md w-full sm:w-64 text-black focus:outline-none"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-yellow-500 text-black px-6 py-2 rounded-r-md hover:bg-yellow-400 focus:outline-none w-full sm:w-auto"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>

                    {isSubscribed && (
                        <p className="text-center text-sm text-green-400 mt-2">
                            Thank you for subscribing!
                        </p>
                    )}
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
                    <div className="mb-6 sm:mb-0 sm:w-1/3 text-center sm:text-left">
                        <h3 className="text-lg font-semibold">Catalog Website</h3>
                        <p className="text-sm">Your one-stop shop for amazing products</p>
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
                <div className="border-t border-gray-700 pt-6 mt-6 text-center">
                    <p className="text-sm">&copy; 2025 Catalog Website. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
