import React from 'react';

const Gallery = () => {
    const images = [
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
    ];

    return (
        <div className='text-center'>
            <h1 className='mb-2 text-3xl'>Gallery</h1>
        <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div key={index} className="overflow-hidden shadow-lg rounded-lg h-64 w-64 md:w-64 md:h-64 cursor-pointer m-auto">
                    <a href={image}>
                        <img alt="gallery" className="w-full h-full object-cover" src={image} />
                    </a>
                </div>
            ))}
        </div>
            </div>
    );
}

export default Gallery;