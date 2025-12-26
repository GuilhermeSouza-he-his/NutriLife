import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Doctors = () => {

  const { speciality } = useParams()
  const { t } = useTranslation()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>{t('doctors.description')}</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>{t('doctors.filters.button')}</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Nutricao esportiva' ? navigate('/doctors') : navigate('/doctors/Nutricao esportiva')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Nutricao esportiva' ? 'bg-[#91bc42] text-black ' : ''}`}>{t('doctors.filters.sport')}</p>
          <p onClick={() => speciality === 'Nutricao clinica' ? navigate('/doctors') : navigate('/doctors/Nutricao clinica')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Nutricao clinica' ? 'bg-[#91bc42] text-black ' : ''}`}> {t('doctors.filters.clinical')}</p>
          <p onClick={() => speciality === 'Nutricao infantil' ? navigate('/doctors') : navigate('/doctors/Nutricao infantil')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Nutricao infantil' ? 'bg-[#91bc42] text-black ' : ''}`}>{t('doctors.filters.child')}</p>
          <p onClick={() => speciality === 'Nutricao estetica' ? navigate('/doctors') : navigate('/doctors/Nutricao estetica')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Nutricao estetica' ? 'bg-[#91bc42] text-black ' : ''}`}>{t('doctors.filters.aesthetic')}</p>
          <p onClick={() => speciality === 'Nutricao funcional' ? navigate('/doctors') : navigate('/doctors/Nutricao funcional')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Nutricao funcional' ? 'bg-[#91bc42] text-black ' : ''}`}>{t('doctors.filters.functional')}</p>
          <p onClick={() => speciality === 'Nutricao geriatrica' ? navigate('/doctors') : navigate('/doctors/Nutricao geriatrica')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Nutricao geriatrica' ? 'bg-[#91bc42] text-black ' : ''}`}>{t('doctors.filters.geriatric')}</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p><p>{item.available ? t('doctors.availability.available') : t('doctors.availability notAvailable')}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors