import { React, useEffect, useState } from 'react'
import BearButton from '../BearButton'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll'


const Header = () =>
{
    const { t } = useTranslation();

    useEffect(() =>
    {
        document.title = t("pageTitle");
    });

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () =>
    {
        setMobileMenu(!mobileMenu);
    }

    return (
        <nav className='site-padding max-md:px-4 flex justify-between py-5 bg-accent-primary text-neutral-light2 items-center z-50 top-0 fixed w-full '>
            <div className='text-5xl font-polaroid-handwritten fakeBold-accent-secondary text-accent-secondary pl-4 drop-shadow-accent-primary-bold
                            max-lg:text-4xl' translate='no'>
                J & M
            </div>

            <ul className={`flex ${mobileMenu ? '' : 'max-md:right-[-200px]'}  gap-8 items-center 
                            max-md:fixed max-md:right-0 transition-[0.5s] max-md:inset-y-0 max-md:w-[200px] max-md:bg-accent-primary max-md:flex-col max-md:pt-[100px] max-md:gap-16
                            max-xl:gap-4`}>
                <li><Link onClick={toggleMenu} include-tab='true' to='hero' smooth={true} offset={0} duration={500} className='hover:text-neutral-dark2 hover:transition-[0.5s] '>{t('nav.home')}</Link></li>
                <li><Link onClick={toggleMenu} include-tab='true' to='countdown' smooth={true} offset={-80} duration={500} className='hover:text-neutral-dark2 hover:transition-[0.5s] '>{t('nav.countdown')}</Link></li>
                <li><Link onClick={toggleMenu} include-tab='true' to='our-story' smooth={true} offset={-80} duration={500} className='hover:text-neutral-dark2 hover:transition-[0.5s] '>{t('nav.ourStory')}</Link></li>
                <li><Link onClick={toggleMenu} include-tab='true' to='practical-information' smooth={true} offset={-80} duration={500} className='hover:text-neutral-dark2 hover:transition-[0.5s] '>{t('nav.weddingDetails')}</Link></li>
                <li className='max-md:px-4'><BearButton clicked={toggleMenu}>{t('button.saveTheDate')}</BearButton></li>
            </ul>

            {/* Hamburger menu */}
            <div className='md:hidden w-[50px] h-[30px] flex flex-col items-center justify-center gap-2.5 cursor-pointer z-50' onClick={toggleMenu}>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className='w-[90%]  bg-neutral-light2 basis-1/3 rounded-full'></div>
                ))}
            </div>

        </nav>
    )
}

export default Header