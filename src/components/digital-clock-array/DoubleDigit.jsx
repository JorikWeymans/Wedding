

import React from 'react'
import SingleDigit from './SingleDigit'


const DoubleDigit = ({ value, max, animationDelay, wantIntroAnimation }) =>
{
    max = max % 100;

    let digitOne;
    let digitTwo;
    let digitOneMax = Math.floor(max / 10.0);
    let digitTwoMax = max % 10;

    if (value >= max) {
        digitOne = digitOneMax;
        digitTwo = digitTwoMax;
    }
    else {
        value = value % 100;
        digitOne = Math.floor(value / 10.0);
        digitTwo = Math.floor(value % 10.0);
        digitTwoMax = digitOne !== digitOneMax ? 9 : digitTwoMax;
    }

    return (
        <div className='flex'>
            <SingleDigit value={digitOne} max={digitOneMax} animationDelay={Number(animationDelay)} wantIntroAnimation={wantIntroAnimation} />
            <SingleDigit value={digitTwo} max={digitTwoMax} animationDelay={Number(animationDelay) + 200} wantIntroAnimation={wantIntroAnimation} />
        </div>
    )
}
export default DoubleDigit

