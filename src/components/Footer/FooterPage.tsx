import React from 'react'

const FooterPage = () => {
    return (
        <footer className="bg-gray-800  mt-14 text-white py-4 text-center w-full">
            <p>&copy; {new Date().getFullYear()} Sabor Social. All rights reserved.</p>
            <nav>
                <a href="/about" className="text-white mx-2">About</a>
                <a href="/contact" className="text-white mx-2">Contact</a>
                <a href="/privacy" className="text-white mx-2">Privacy Policy</a>
            </nav>
        </footer>
    )
}

export default FooterPage
