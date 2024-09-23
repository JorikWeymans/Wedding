import React from 'react'

const BearButton = ({ children, clicked }) =>
{

    const handleClick = () =>
    {
        if (typeof clicked === 'function') {
            clicked();
        }
    };
    return (

        <a href="https://calndr.link/event/9KarjJNtis" data-auth="NotApplicable" rel="noopener noreferrer" target="_blank">
            <button onClick={handleClick} include-tab='true' className="bg-accent-secondary py-2 px-5 text-neutral-light2 hover:text-neutral-dark2  " type="button">
                {children}</button>
        </a >

    )
}

export default BearButton