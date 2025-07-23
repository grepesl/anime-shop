import React from 'react';
import { assets } from "../assets/assets.js";

const Hero = () => {
    return (
        <div className="relative w-full h-[80vh] sm:h-screen overflow-hidden">

            {/* Hero Image */}
            <img
                src={assets.hero_img}
                alt="Hero"
                className="w-full h-full object-cover absolute inset-0 z-0"
            />

            {/* Overlay ant viršaus paveikslėlio */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            {/* Tekstas virš paveikslėlio ir overlay */}
            <div className="relative z-20 flex items-start justify-center h-full px-4 text-center pt-16">
                <div>
                    <h2 className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg">
                        Welcome to
                    </h2>
                    <h1 className="text-4xl sm:text-8xl font-bold text-white drop-shadow-lg">
                        OtakuNest
                    </h1><br />
                    <p className="text-lg sm:text-2xl text-white drop-shadow-md leading-tight">
                        Your cozy hideout for anime magic, hand-crafted<br />
                        goods & surprise crates
                    </p>

                    <button
                        className="mt-8 px-10 py-3 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700
                            text-white font-bold rounded-full shadow-lg
                            hover:shadow-[0_0_15px_rgb(255,105,180)] hover:scale-110
                            transition transform duration-300 ease-in-out
                            focus:outline-none focus:ring-4 focus:ring-pink-400
                            active:scale-95"
                        onClick={() => window.location.href = '/shop'}>
                        SHOP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;