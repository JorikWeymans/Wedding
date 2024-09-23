import cuties from '@assets/Cuties.png';

import ph from '@assets/OurStory/ph_timeline.png';


import antwerp from '@assets/OurStory/Antwerp.jpeg';
import theReturn from '@assets/OurStory/Return.jpeg';
import kortrijk from '@assets/OurStory/Kortrijk.jpeg';
import proposal from '@assets/OurStory/Proposal.jpeg';
import wedding from '@assets/OurStory/Wedding.jpeg';
import reunion from '@assets/OurStory/Reunion.jpeg';

const preloadedImages = new Map([
    { id: 'cuties', image: cuties },
    { id: 'ph', image: ph },
    { id: 'antwerp', image: antwerp },
    { id: 'theReturn', image: theReturn },
    { id: 'kortrijk', image: kortrijk },
    { id: 'proposal', image: proposal },
    { id: 'wedding', image: wedding },
    { id: 'reunion', image: reunion }
].map(item => [item.id, item.image]));



export function preloadAllImages()
{
    const promises = Array.from(preloadedImages.values()).map((src) =>
    {
        return new Promise((resolve, reject) =>
        {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
        });
    });

    //const delay = new Promise((resolve) =>
    //{
    //    setTimeout(resolve, 2000); // 2 seconds delay
    //});
    //promises.push(delay);

    return Promise.all(promises);
}

export default preloadedImages;