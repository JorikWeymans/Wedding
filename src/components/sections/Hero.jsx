import { React, useState, useEffect } from 'react'

// import heroImage from '@assets/Hero.png'

import heroImage from '@assets/Hero_test_1.avif'

import heroSecondImage from '@assets/hero_second.jpeg'
import BearButton from '../BearButton'

import { useTranslation } from 'react-i18next';
import preloadedImages from '@staticServices/PreloadedImagesStaticService'

const Hero = () =>
{
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 465);

    useEffect(() =>
    {
        const handleResize = () =>
        {
            setIsMobile(window.innerWidth <= 768);
            setIsSmallScreen(window.innerWidth <= 465);
        };

        window.addEventListener('resize', handleResize);

    }, []);

    return (
        <div id='hero' className=' site-padding  relative z-20'>
            <div className='w-full h-[75vh] max-md:h-[600px] relative'>
                <div className='h-full relative overflow-hidden'>
                    <img src={heroImage} className=' size-full object-cover -scale-x-100 brightness-75' />
                    <img src={preloadedImages.get('cuties')} className='absolute object-fill min-w-[0vw] w-[50vw] max-w-[500px] z-10
                                                     h-[auto] left-[3vw] bottom-[0]
                                                     max-md:left-[-25vw] max-md:w-[100vw] brightness-0'
                        style={{ filter: 'drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.5))' }} />

                    <div className='absolute top-[15%] right-0   
                                    max-md:text-7xl max-md:top-[14%] w-[850px] h-[400px]'>
                        <div className='w-full h-full bg-gray-700 opacity-0 blur-2xl rounded-3xl '></div>
                        <div className='absolute top-0 left-0 font-polaroid-handwritten text-neutral-light2 text-right w-[850px] p-12
                                        max-md:p-2 max-md:px-[4vw]'>
                            <h2 className='text-[10rem] font-polaroid-handwritten italic leading-[.8em] 
                                           max-md:text-9xl max-md:leading-[.7em] 
                                           max-lg:text-[9rem] 
                                           '>Jorik  & {isMobile ? <br /> : null} Mélody</h2>
                            <h3 className='text-6xl font-bold pt-8 
                                            max-md:4xl fakeBold-neutral-light-2'>
                                {isSmallScreen ?
                                    <> {t('weddingDate.day')} <br /> {t('weddingDate.month')} <br /> {t('weddingDate.year')}  </> :
                                    <> - {t('weddingDate.date')} - </>
                                }
                            </h3>
                        </div>
                    </div>
                </div>

                <img src={heroSecondImage} className='hidden size-[15vw] bottom-[13vw] left-[calc(95%_-_15vw)] object-cover relative z-20 
                                                      2xl:size-[11vw] 2xl:bottom-[10vw] 2xl:left-[calc(95%_-_11vw)]
                                                      max-md:size-[30vw] max-md:bottom-[28vw] max-md:left-[calc(95%_-_30vw)]'/>
            </div>
            <div className='w-full   xl:h-[25vh] min-h-[215px] max-xl:pb-8 md:gap-10 flex  bg-neutral-light2  px-10 items-center
                            max-md:flex-col max-md:pb-8 max-md:px-4'>
                <div className='as-fade-in-bottom md:basis-6/12 h-full flex'>
                    <h1 className='pt-12 text-5xl font-bold leading-[1.3]
                                    max-md:pt-8 max-xl:text-5xl'> {t('hero.title')}</h1>
                </div>

                <div className='as-fade-in-bottom md:basis-6/12 h-full pt-1 pb-3
                                max-md:gap-4 max-lg:gap-6'>
                    <p className='max-md:pt-4 pt-12 pb-8'>{t('hero.text')}</p>
                    <div>
                        <BearButton >{t('button.saveTheDateSecond')}</BearButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero