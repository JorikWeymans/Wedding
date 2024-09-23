import { React, useEffect } from 'react'

const TabSelectionService = () =>
{
    useEffect(() =>
    {
        const nottabable = document.querySelectorAll('[include-tab="false"]');
        nottabable.forEach(e => e.setAttribute('tabIndex', -1));
        const tabableElements = document.querySelectorAll('[include-tab="true"]');

        for (let i = 0; i < tabableElements.length; i++) {

            tabableElements[i].setAttribute('tabIndex', i + 1);
        }

        //tabableElements[0].focus();
    });
    return (<></>)
}

export default TabSelectionService