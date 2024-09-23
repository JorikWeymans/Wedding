import React from 'react'
import DoubleDigit from './DoubleDigit'

const TimeUnit = ({ value, max, description, animationDelay, wantIntroAnimation }) =>
{
    return (
        <div className='inline-flex flex-col text-center pt-2 '>
            <DoubleDigit value={value} max={max} animationDelay={animationDelay} wantIntroAnimation={wantIntroAnimation} />
            <h2 className='text-4xl pt-6 text-neutral-dark2 font-bold
                            max-md:pb-16'>{description}</h2>
        </div>
    )
}

export default TimeUnit