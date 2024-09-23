import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll'
import LanguageSelector from '../LanguageSelector';
const Footer = () =>
{
    const { t } = useTranslation();
    return (
        <>
            <div className='max-md:h-[450px] h-[205px]'></div>
            <div className='max-md:h-[450px] h-[205px] site-padding text-xl  text-white  w-full  bottom-0 fixed '>
                <div className=' bg-neutral-light1 h-full w-full px-8 '>
                    <div className='flex items-center justify-between py-16 '>
                        <div className='text-3xl font-polaroid-handwritten fakeBold-accent-secondary text-accent-secondary pl-4 drop-shadow-accent-primary-bold' translate='no'>
                            J & M
                        </div>
                        <div>
                            <ul className='flex gap-8 items-center text-sm text-neutral-dark1 font-bold
                                            max-md:flex-col'>
                                <li><Link include-tab="true" to='hero' smooth={true} offset={0} duration={500}>{t('nav.home')}</Link></li>
                                <li><Link include-tab="true" to='countdown' smooth={true} offset={-80} duration={500}>{t('nav.countdown')}</Link></li>
                                <li><Link include-tab="true" to='our-story' smooth={true} offset={-80} duration={500}>{t('nav.ourStory')}</Link></li>
                                <li><Link include-tab="true" to='practical-information' smooth={true} offset={-80} duration={500}>{t('nav.weddingDetails')}</Link></li>
                                <li className='select-none text-lg max-md:hidden'> | </li>
                                <li translate='no' className=' '>
                                    <LanguageSelector />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className='h-[2px] bg-neutral-dark1' />
                    <div className='flex max-md:flex-col max-md:leading-10 max-md:text-center text-sm pt-2  text-neutral-dark1 justify-between'>
                        <h2>{t('footer.copyright')}</h2>
                        <h2>{t('footer.designedBy')} <a include-tab="true" href='https://bearlyhumancode.com/' target='_blank'>Bearlyhumancode</a></h2>
                    </div>


                </div>
            </div>
        </>

    )
}

export default Footer

