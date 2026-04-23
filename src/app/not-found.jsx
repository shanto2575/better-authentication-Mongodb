import Link from 'next/link'
import React from 'react'

const NOtFOUND = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">

            <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center text-white">

                {/* Big 404 */}
                <h1 className="text-8xl font-extrabold tracking-widest drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl font-semibold mt-4">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="text-white/80 mt-3">
                    The page you’re looking for doesn’t exist or has been moved.
                    Don’t worry, you can go back to the homepage.
                </p>

                {/* Buttons */}
                <div className="flex gap-4 justify-center mt-8">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-white text-purple-600 font-semibold hover:scale-105 transition duration-300 shadow-lg"
                    >
                        🏠 Go Home
                    </Link>

                    
                </div>

                {/* Bottom text */}
                <p className="text-xs text-white/60 mt-8">
                    Error code: 404 | Lost in space 🚀
                </p>

            </div>
        </div>
    )
}

export default NOtFOUND