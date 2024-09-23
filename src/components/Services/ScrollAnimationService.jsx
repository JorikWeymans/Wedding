import { useEffect, useRef } from 'react';
import './ScrollAnimationService.css'

const fadeInObserver = new IntersectionObserver((entries) =>
{
    entries.forEach((entry) =>
    {
        const isTransitioned = window.getComputedStyle(entry.target).getPropertyValue('--is-transitioned');

        if (entry.isIntersecting) {
            if (isTransitioned == "true" || isTransitioned == "") {
                entry.target.classList.remove('_as-fade-in-bottom');
            }
            entry.target.classList.add('_as-fade-in-bottom');
        }
        else {

            if (isTransitioned == "true" || isTransitioned == "") {
                entry.target.classList.remove('_as-fade-in-bottom');
            }
        }
    });
});

const ScrollAnimationService = () =>
{
    useEffect(() =>
    {
        const fadeInElements = document.querySelectorAll('.as-fade-in-bottom');
        fadeInElements.forEach((el) => fadeInObserver.observe(el));
    });

    return (<></>)
}

export default ScrollAnimationService
