import React from 'react';
import Image from 'next/image';
import { FaSignOutAlt } from 'react-icons/fa';


const HeaderPage = () => {
    return (
        <header className="flex justify-between items-center mx-5">
            <Image src="/images/logo.png" alt="Header Image" width={100} height={60} />
            <FaSignOutAlt className="cursor-pointer" />
        </header>
    );
}


export default HeaderPage;
