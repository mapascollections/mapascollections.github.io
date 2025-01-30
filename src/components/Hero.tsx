'use client';
import { useEffect } from "react";

export default function Hero() {
    const handleScroll = () => {
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative h-screen overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('/imgs/banner.png')`,
                    backgroundAttachment: 'fixed',
                    zIndex: -1,
                }}
            ></div>

            <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-12">
                <div className="text-white space-y-6 max-w-lg">
                    <h1 className="text-2xl md:text-5xl font-bold drop-shadow-lg max-h-[6rem] leading-tight overflow-hidden">
                        Transform Your Space with Elegant Home Decor
                    </h1>
                    <p className="text-lg md:text-xl drop-shadow-lg max-h-[6rem] leading-relaxed overflow-hidden">
                        Discover premium decor to elevate your living space. Curated collections designed to bring comfort, style, and sophistication to your home.
                    </p>
                    <a href="https://wa.me/917709359451?text=Hi%20Mapas%20Collections!%20Need%20some%20cool%20home%20decor%20ideas!%20Let's%20talk.✨
" target="_blank" className="inline-block bg-[#25D366] text-white-100 font-semibold py-3 px-6 rounded-sm shadow-lg transition-transform transform hover:scale-105">
                        Whatsapp Now
                    </a>
                </div>
            </div>
        </section>
    );
}
