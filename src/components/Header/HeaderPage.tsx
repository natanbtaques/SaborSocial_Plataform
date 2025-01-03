import React from 'react';
import Image from 'next/image';
import { FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';

interface HeaderPageProps {
    isLoginPage: boolean;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ isLoginPage }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='pb-14'>
            <header
                className={`flex justify-between items-center px-5 py-3 fixed w-full bg-slate-800 shadow-md transition-all duration-300 ${isHovered ? 'h-20' : 'h-12'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex items-center">
                    <Image src="/images/logo.png" alt="Header Image" width={100} height={60} className={`shadow-md transition-all duration-700 ${isHovered ? 'h-20' : 'h-8'} ${isHovered ? 'w-20' : 'w-8'}`} />
                    <h1 className="ml-3 text-xl font-semibold text-white">Sabor Social</h1>
                </div>

                {!isLoginPage &&

                    <div className='flex space-x-10'>
                        <p className="w-8 h-8 mt-3 rounded-full object-cover bg-white"></p>
                        <div>
                            <p>name</p>
                            <p>gmail</p>
                        </div>
                        <FaSignOutAlt
                            className="cursor-pointer text-white text-2xl mt-3"
                            onClick={() => window.location.href = 'http://localhost:3000/login'}
                        />
                    </div>}
            </header>
        </div>
    );
}

export default HeaderPage;
