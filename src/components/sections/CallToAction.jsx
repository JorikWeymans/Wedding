import React from 'react'
import { useTranslation } from 'react-i18next';
import background from '@assets/Rings.webp'
import BearButton from '../BearButton';

const CallToAction = () =>
{
    const { t } = useTranslation();
    return (
        <div className='site-padding relative z-20'>
            <div className='relative h-[323px] max-md:h-[380px] flex align-center '>
                <img src={background} className='w-full object-cover h-full brightness-[25%] absolute'></img>
                <div className=' relative flex max-md:flex-col max-md:justify-center justify-between items-center w-full px-10 gap-6'>
                    <div className='as-fade-in-bottom'>
                        <h1 className='text-3xl font-bold text-neutral-light2 pb-4 max-md:text-2xl'>{t('cta.title')}</h1>
                        <p className='text-xl text-neutral-light2 max-md:text-lg'>{t('cta.description')} </p>
                    </div>
                    <div className='as-fade-in-bottom max-md:pt-12 shrink-0'>
                        <BearButton>{t('button.saveTheDateSecond')}</BearButton>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CallToAction