import { Fragment, React, useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

import './OurStory.css';
import TimelineElement from '../timeline/TimelineElement';
import { TimelineElementModal } from '../../models/TimelineElementModal';

const OurStory = () =>
{
    const timelineContainer = useRef(null);
    const [halfHeight, setHeight] = useState(window.innerHeight / 2);

    const { t, i18n } = useTranslation();
    const [timelineElements, setTimeLineElements] = useState([]);

    useEffect(() =>
    {
        const timelineDefault = Object.values(t('ourStory.timeline', { returnObjects: true, lng: i18n.options.fallbackLng[0] }));
        const timeline = Object.values(t('ourStory.timeline', { returnObjects: true }));
        // Maps on my translated the timeline properties that were not filled in, allowing the translated to not have some properties
        //  by default it did not seem to work 
        timeline.forEach((item, index) =>
        {
            timeline[index] = {
                ...timelineDefault[index],
                ...item
            };
        });

        const data = Object.values(timeline).map(e =>
        {
            return new TimelineElementModal(e);
        })

        let elements = [];
        for (let i = 0; i < data.length; i++) {
            elements.push(
                <Fragment key={i}>
                    <TimelineElement reverseOrder={i % 2 !== 0} data={data[i]} />
                </Fragment>)
        }

        setTimeLineElements(elements);
    }, [i18n.language])


    UpdateHeight(setHeight);

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            const rect = timelineContainer.current.getBoundingClientRect();
            const top = rect.top;
            const height = rect.height;

            const offset = 200;
            const differenceFromCenter = (halfHeight + offset) - top;
            const percentage = Clamp(differenceFromCenter / height * 100, 0, 100) + '%';
            timelineContainer.current.style.setProperty('--timeline-current-height', percentage);
        };

        // Add event listener on scroll
        window.addEventListener('scroll', handleScroll);

        // Call once to handle the initial load state
        handleScroll();

        // Cleanup event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [timelineElements]);


    return (
        <div id='our-story' className='site-padding relative z-20 overflow-hidden'>
            <div className='bg-neutral-light2 w-full pb-8'>
                <h1 className='section-title'>{t('ourStory.title')}</h1>
                <div className='timeline-container' ref={timelineContainer}>
                    {timelineElements}
                </div>

            </div>
        </div>
    )
}

export default OurStory


function UpdateHeight(setHeight)
{
    useEffect(() =>
    {
        const handleResize = () =>
        {
            setHeight(window.innerHeight / 2);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () =>
        {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

}

function Clamp(value, min, max)
{
    return Math.max(min, Math.min(value, max));
}