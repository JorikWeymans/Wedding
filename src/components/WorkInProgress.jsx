import React from 'react'
import { useTranslation } from 'react-i18next';
const WorkInProgress = () =>
{
    const { t } = useTranslation();
    return (
        <div className='text-xl max-md:text-sm bg-blue-700 opacity-55 text-white py-2 w-full z-30 bottom-0 fixed'>
            <h3 className='text-center'>{t('underConstruction')}</h3>
        </div>
    )
}

export default WorkInProgress