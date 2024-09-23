import { React, Fragment, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

import TimeUnit from '@components/digital-clock-array/TimeUnit';
import { TimeUnitModel } from '@models/TimeUnitModel';

import bg from '@assets/CountdownBackground.jpg'


const Countdown = () =>
{
    const { t } = useTranslation();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [data, setData] = useState([]);
    const [elements, setElements] = useState([]);


    useEffect(() =>
    {
        const handleResize = () =>
        {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

    });

    useEffect(() =>
    {
        const updateData = () =>
        {
            const difference = calculateDateDifference(new Date(), new Date(2025, 1, 29, 12, 30));

            setData([
                new TimeUnitModel(difference.months, 12, 'countdown.months', 0),
                new TimeUnitModel(difference.weeks, 4, 'countdown.weeks', 400),
                new TimeUnitModel(difference.days, 7, 'countdown.days', 800),
                new TimeUnitModel(difference.hours, 24, 'countdown.hours', 1200),
            ]);
        };

        updateData();

        // Update the countdown every minute, more than enough
        const intervalId = setInterval(updateData, 60000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() =>
    {
        setElements(CreateCountDownElements(data, t, !isMobile));

    }, [data, t, isMobile]);

    return (
        <div id='countdown' className='site-padding relative z-20 '>
            <div className='overflow-hidden relative'>
                <h1 className='section-title'>{t('countdown.title')}</h1>

                <div className='as-fade-in-bottom md:flex md:justify-center md:text-[10px] pt-3 
                                max-md:text-[6px] max-md:grid max-md:grid-cols-[1fr_1fr] max-md:justify-items-center'>
                    {elements}
                </div>
                <div className='flex flex-row'>

                </div>
                <h2 className='as-fade-in-bottom text-7xl font-bold tracking-widest text-center pt-6 pb-10 text-accent-secondary
                               max-lg:text-6xl
                               max-md:text-5xl'>
                    {t('weddingDate.dayOfWeek')} {isMobile ? <br /> : null}{t('weddingDate.date')}</h2>
                <div className='absolute top-0 left-0 size-full -z-50  bg-neutral-light1 '>
                    <img src={bg} className=' brightness-[90%] bg-light1 object-cover size-full opacity-25'></img>
                </div>

            </div>


        </div>
    )
}

export default Countdown

const CreateCountDownElements = (data, t, wantIntroAnimation) =>
{
    let elements = [];

    for (let i = 0; i < data.length; i++) {
        const e = data[i];
        elements.push(
            <Fragment key={i}>
                <TimeUnit value={e.value} max={e.max} description={t(e.description)} animationDelay={e.animationDelay} wantIntroAnimation={wantIntroAnimation} />
                {i !== data.length - 1 && <div className='text-neutral-dark1 text-9xl max-xl:text-[7rem] select-none 
                                                            max-md:hidden'>:</div>}
            </Fragment>);
    }

    return elements;
}
const calculateDateDifference = (date1, date2) =>
{

    if (date1 > date2) {
        [date1, date2] = [date2, date1];
    }

    // Calculate the total difference in milliseconds
    let diffInMs = date2 - date1;

    // Helper function to add months while preserving day accuracy
    const addMonths = (date, months) =>
    {
        let result = new Date(date);
        result.setMonth(result.getMonth() + months);
        return result;
    };

    // Calculate months
    let months = 0;
    let tempDate = addMonths(date1, months);
    while (tempDate <= date2) {
        months++;
        tempDate = addMonths(date1, months);
    }
    months--; // The last increment will be an overshoot, so subtract 1.

    // Calculate remaining days, weeks, hours after months are subtracted
    tempDate = addMonths(date1, months);
    diffInMs = date2 - tempDate;

    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);
    const remainingWeeks = Math.floor(diffInDays / 7); // Full weeks
    const remainingDays = diffInDays % 7; // Days leftover after full weeks
    const remainingHours = diffInHours % 24; // Hours leftover after full days

    return {
        months,
        weeks: remainingWeeks,
        days: remainingDays,
        hours: remainingHours
    };
};