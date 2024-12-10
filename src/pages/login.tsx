import React from 'react';
import Login from '@/components/Login/HandleLogin';
import BackgroundSlider from '@/components/Login/BackgroundSlider';


const LoginPage = () => {
    return (
        <div className=" ">

            {/* Fundo com o slider */}
            <BackgroundSlider />

            {/* Contêiner do login */}
            <div className="relative  flex items-center justify-center ">
                <div className=" bg-opacity-90  rounded-lg shadow-lg ">
                    <Login />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
