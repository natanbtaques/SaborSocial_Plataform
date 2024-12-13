import React, { useState } from 'react';
import Login from '@/components/Login/HandleLogin';
import BackgroundSlider from '@/components/Login/BackgroundSlider';
import LogOn from '@/components/Login/LogOn';

const LoginPage = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div>
            {/* Fundo com o slider */}
            <BackgroundSlider />

            {/* Contêiner do login */}
            <div className="relative flex items-center justify-center">
                <div className="bg-opacity-90 rounded-lg shadow-lg">
                    {isRegistering ? (
                        <LogOn onSwitchToLogin={() => setIsRegistering(false)} />
                    ) : (
                        <Login onSwitchToRegister={() => setIsRegistering(true)} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
