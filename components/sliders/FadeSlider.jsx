"use client"

import React, { useState, useEffect } from 'react';

const FadeSlider = () => {
    const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, [current]);

    return (
        <div className="text-center">
            <div className="flex justify-center items-center gap-10">
                <button onClick={prevSlide}> &lt;</button>
                <div className="flex justify-center items-center flex-col">
                    {images.map((image, index) => (
                        <div key={index} className={`transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={image} alt="image slider" className="w-72 h-52" />
                        </div>
                    ))}
                    <div>
                        {images.map((_, index) => (
                            <span key={index}>{index === current ? "●" : "○"}</span>
                        ))}
                    </div>
                </div>
                <button onClick={nextSlide}> &gt;</button>
            </div>
        </div>
    );
}

export default FadeSlider;