import React from 'react'
import { useTranslation } from 'react-i18next';

import church from '@assets/OLV.webp'
import triMass from '@assets/Mass.jpg'
import dinner from '@assets/Park.jpg'
const PracticalInformation = () =>
{
    const { t } = useTranslation();

    return (
        <div id='practical-information' className='site-padding relative z-20'>
            <div className='bg-neutral-light1 pb-20'>
                <h1 className='section-title '>{t('practicalInformation.title')}</h1>
                <div className='flex px-10 justify-between gap-10 max-md:flex-col'>
                    <div className='as-fade-in-bottom basis-1/3'>
                        <img src={church} className='practical-info-image'></img>
                        <h2 className='practical-info-subtitle'>{t('practicalInformation.chuch.title')}</h2>
                        <div >
                            <ul className='flex flex-col gap-2'>
                                <address>
                                    <li className='flex gap-4 '>
                                        <h3 className='basis-[22%] max-lg:basis-[38%] max-md:basis-[28%]'>{t('practicalInformation.chuch.location.title')}</h3>
                                        <p> {t('practicalInformation.chuch.location.name')}<br />
                                            {t('practicalInformation.chuch.location.adress1')} <br />
                                            {t('practicalInformation.chuch.location.adress2')}</p>
                                    </li>
                                </address>

                                <li className='flex gap-4'>
                                    <h3 className='basis-[22%] max-lg:basis-[38%] max-md:basis-[28%]'>{t('practicalInformation.chuch.time.title')}</h3>
                                    <p>{t('practicalInformation.chuch.time.value')}</p>
                                </li>
                            </ul>

                        </div>

                        <p className='max-md:text-sm'></p>
                    </div>
                    <div className='as-fade-in-bottom basis-1/3'>
                        <img src={triMass} className='practical-info-image'></img>
                        <h2 className='practical-info-subtitle'>{t('practicalInformation.mass.title')}</h2>
                        <div className='flex flex-col gap-2'>
                            <p>{t('practicalInformation.mass.description')}</p>
                            <a className='font-bold leading-5 hover:text-accent-secondary' href={t('practicalInformation.mass.link')} target='_blank'>{t('practicalInformation.mass.linkText')}</a>
                        </div>


                    </div>
                    <div className='as-fade-in-bottom basis-1/3'>
                        <img src={dinner} className='practical-info-image'></img>
                        <h2 className='practical-info-subtitle'>{t('practicalInformation.reception.title')}</h2>
                        <p>{t('practicalInformation.reception.description')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PracticalInformation