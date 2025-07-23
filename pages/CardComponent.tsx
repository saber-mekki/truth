
import React from 'react'
import StatsGrid from './StatsGrid'
interface CardProps {
  deathsToday: any
  childrenKilled: any
  womenKilled: any
  lastDailyUpdate: any
  massacres: any
  injured: any
  medical: any
  civilDefence: any
  press: any
}

const CardComponent: React.FC<CardProps> = ({
  deathsToday,
  childrenKilled,
  womenKilled,
  lastDailyUpdate,
  massacres,
  injured,
  medical,
  civilDefence,
  press,
}) => {
  return (
    <StatsGrid
      stats={[
        { value: deathsToday, label: 'Total Martyrs in Gaza Strip', icon: '/icons/mart_Gaza.svg' },
        { value: childrenKilled, label: 'Kids (Gaza Strip)', icon: '/icons/Mat_Kids.svg' },
        { value: womenKilled, label: 'Women (Gaza Strip)', icon: '/icons/Mat_female.svg' },
        { value: medical, label: 'Medical Staff Martyrs', icon: '/icons/AllDoctors.svg' },
        { value: press, label: 'Press Martyrs', icon: '/icons/press.svg' },
        { value: civilDefence, label: 'Civil Defence', icon: '/icons/CivilDef.svg' },
        { value: massacres, label: 'Massacres', icon: '/icons/Mat.svg' },
        { value: injured, label: 'Wounded', icon: '/icons/Mat.svg' },
        { value: lastDailyUpdate, label: 'Last Update', icon: '/icons/update-icon.svg' },
      ]}
    />
  )
}

export default CardComponent
