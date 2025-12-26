import React from 'react'
import { assets } from '../assets/assets'
import { useTranslation } from 'react-i18next'

const Contact = () => {

  const { t } = useTranslation()

  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>
          {t('contact.title.contact')}{" "}
          <span className='text-gray-700 font-semibold'>
            {t('contact.title.us')}
          </span>
        </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>{t('contact.office.title')}</p>
          <p className='text-gray-500 whitespace-pre-line'>{t('contact.office.address')}</p>
          <p className=' text-gray-500'>Tel: (91) 95555-0132 <br /> Email: guilherme@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'> {t('contact.careers.title')}</p>
          <p className='text-gray-500'>{t('contact.careers.description')}</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'> {t('contact.careers.button')}</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
