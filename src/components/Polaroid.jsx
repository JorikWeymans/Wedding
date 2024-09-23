import { React, useState } from 'react'

const Polaroid = ({ image, imageWidth, title, rotateRight }) =>
{
    const [rotation] = useState(() =>
    {
        const min = 4;
        const max = 10;
        const value = Math.floor(Math.random() * (max - min + 1)) + min;

        return rotateRight ? value : 0 - value;
    });


    return (
        <div className='bg-white flex flex-col px-4 pt-4 shadow-2xl items-center' style={{ transform: `rotate(${rotation}deg)` }}>
            <img src={image} width={`${imageWidth === null ? '250px' : imageWidth}`} className={`h-auto [disabled]sepia-[75%] [disabled]grayscale-[80%]`}></img>
            <h2 className='text-center whitespace-pre-line  py-4 font-polaroid-handwritten text-6xl max-md:text-5xl'>{title}</h2>
        </div >
    )
}

export default Polaroid
