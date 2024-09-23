import { React, useState, useEffect } from 'react'

import preloadedImages from '@staticServices/PreloadedImagesStaticService'
import Polaroid from '@components/polaroid';


const TimelineElement = ({ reverseOrder, data }) =>
{
    reverseOrder = reverseOrder ?? false;

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() =>
    {
        const handleResize = () =>
        {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        reverseOrder = true;
    }
    return (
        <div className=' md:flex md:pb-12 md:pt-12'>
            {
                reverseOrder
                    ? <>
                        {GenerateTextCol(data, true)}
                        {GenerateImageCol(data, true)}
                    </>
                    : <>
                        {GenerateImageCol(data, false)}
                        {GenerateTextCol(data, false)}
                    </>
            }
        </div>
    )
}

export default TimelineElement

function GenerateImageCol(data, rotateRight)
{
    return (
        <div className={`as-fade-in-bottom basis-6/12 ${data.imageSrc === undefined ? '' : 'md:py-4 px-12 max-md:pt-8 max-md:pb-24'}`}>
            <div className='flex justify-center items-center max-md:pl-6 '>
                {data.imageSrc !== undefined
                    ? <Polaroid image={`${preloadedImages.get(data.imageSrc)}`} imageWidth={data.imageWidth} title={data.imageTitle} rotateRight={rotateRight}></Polaroid>
                    : <></>
                }
            </div>
        </div>
    )
}

function GenerateTextCol(data, isRight)
{
    return (
        <div className='as-fade-in-bottom z-[2] basis-6/12 py-4 px-12
                        max-md:px-20'>
            <h2 className='text-4xl font-bold text-accent-secondary relative
                           max-md:text-4xl'>{data.textDate}
                <span className={`z-[2] bg-neutral-light2 absolute h-10 w-10 flex justify-center items-center rounded-[50%] bottom-[0%] 
                                    ${isRight ? 'right-[calc(-3rem_-_20px)]' : 'left-[calc(-3rem_-_20px)]'}
                                     max-md:left-[calc(-3rem_-_20px)]`}>
                    <div className='relative h-3/6 w-6/12 bg-[#6e0606]  rounded-[50%]'></div>
                </span>
            </h2>
            <h3 className='text-3xl font-bold pt-4 pb-2 text-neutral-dark2
                           max-md:text-2xl'>{data.textTitle}</h3>
            <p className='max-md:text-lg'>{data.textDescription}</p>

        </div>
    )
}