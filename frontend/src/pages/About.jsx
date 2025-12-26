import React from 'react'
import { assets } from '../assets/assets'
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation()

  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>{t('about.title.about')} <span className='text-gray-700 font-semibold'>{t('about.title.us')}</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>{t('about.intro.p1')}</p>
          <p>{t('about.intro.p2')}</p>

          <b className='text-gray-800'>
            {t('about.vision.title')}
          </b>
          <p>{t('about.vision.description')}</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>
          {t('about.why.title').toUpperCase().split(' ')[0]}{" "}
          <span className='text-gray-700 font-semibold'>
            {t('about.why.title').split(' ').slice(1).join(' ')}
          </span>
        </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>{t('about.why.efficiency.title').toUpperCase()}:</b>
          <p>{t('about.why.efficiency.description')}</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>{t('about.why.convenience.title').toUpperCase()}:</b>
          <p>{t('about.why.convenience.description')}</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>{t('about.why.personalization.title').toUpperCase()}:</b>
          <p>{t('about.why.personalization.description')}</p>
        </div>
      </div>

    </div>
  )
}

export default About
