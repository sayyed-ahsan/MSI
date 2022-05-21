import React from 'react';
import img from '../../images/extra/ASUS-GeForce-GTX-1660-SUPER-Series_Banner_1200x628.jpg'

const Extra1 = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} class="lg:w-[600px] lg:h-[400px] rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">The GAMING You Know & Trust</h1>
                    <p class="py-6">The latest iteration of MSI’s iconic GAMING series once again brings performance, low-noise efficiency, and aesthetics that hardcore gamers have come to recognize and trust.</p>
                    <button class="btn btn-wide">Wide</button>
                </div>
            </div>
        </div>
    );
};

export default Extra1;