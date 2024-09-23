import { React, useEffect, useRef, useState } from 'react';
import './LanguageSelector.css'
import { useTranslation, Trans } from 'react-i18next';
import { languageSS } from '@staticServices/LanguageStaticService';

const LanguageSelector = () =>
{
    const container = useRef(null);
    const content = useRef(null);

    const [showContent, setShowContent] = useState(false);

    const openContent = () =>
    {
        content.current.classList.add('ls-show')
        setShowContent(true);
    }

    const { t, i18n } = useTranslation();
    useEffect(() =>
    {
        selectLanguage(i18n.resolvedLanguage);

    }, []);

    useEffect(() =>
    {

        // Add a click event listener to the document
        const handleClick = (event) =>
        {
            const clickedElement = event.target;
            const parentElement = container.current;

            // Check if the clicked element is inside MyParent or one of its children
            const isChildOfParent = parentElement && parentElement.contains(clickedElement);

            if (!isChildOfParent) {
                content.current.classList.remove('ls-show')
                setShowContent(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () =>
        {
            document.removeEventListener('click', handleClick);
        };
    }, []);


    const [items, setItems] = useState([
        { code: 'nl', lang: 'Nederlands' },
        { code: 'fr', lang: 'Français' },
        { code: 'en', lang: 'English' },
    ]);




    const selectLanguage = (code, alsoStore) =>
    {
        const index = items.findIndex(item => item.code === code);

        if (index !== -1) {
            // Remove the item from its current position
            const [item] = items.splice(index, 1);

            // Insert the item at the beginning of the array
            const updatedItems = [item, ...items];

            // Update state with the new array
            setItems(updatedItems);
            setShowContent(false);
            if (alsoStore === true)
                languageSS.changeLanguageAndStore(code);
        }
    };



    return (
        <div id='LanguageSelector' ref={container} className='flex gap-2 items-center '>
            <svg className="w-6 h-6 text-neutral-dark1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            <div className='relative '>
                <button onClick={openContent} className="language-btn h-[27px] text-left bg-neutral-light2 border-neutral-dark1 border flex">
                    <h3 className='pl-3 w-[80px] leading-[25px]'>{items[0].lang}</h3>
                    <svg className={`${showContent ? 'ls-arrow-show ' : ''} ls-arrow w-6 h-6 text-neutral-dark1 relative z-30`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /> </svg>
                </button >
                <div ref={content} className={`ls-content ${showContent ? 'ls-show  ' : 'ls-hide '}  absolute text-neutral-dark1 bg-neutral-light2 w-full left-0 top-0 border-neutral-dark1 border`}>
                    <h3 onClick={() => selectLanguage(items[0].code, true)} className='pl-3 h-[25px]  leading-[25px] cursor-pointer hover:bg-neutral-light1'>{items[0].lang}</h3>
                    <h3 onClick={() => selectLanguage(items[1].code, true)} className='pl-3 h-[25px]  leading-[25px] cursor-pointer hover:bg-neutral-light1'>{items[1].lang}</h3>
                    <h3 onClick={() => selectLanguage(items[2].code, true)} className='pl-3 h-[25px]  leading-[25px] cursor-pointer hover:bg-neutral-light1'>{items[2].lang}</h3>
                </div>
            </div>


        </div >
    );
};
export default LanguageSelector






