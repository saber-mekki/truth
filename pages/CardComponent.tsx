// components/CardComponent.tsx

import React from 'react'

interface CardProps {
  deathsToday: any
  missing: any
  childrenKilled: any
  womenKilled: any
  blessings: any
}

const CardComponent: React.FC<CardProps> = ({
  deathsToday,
  missing,
  childrenKilled,
  womenKilled,
  blessings,
}) => {
  return (
    <div className="card">
      <ul>
        <li>
          <a className="li_clz">Deaths:</a> <a className="number_clz">{deathsToday}</a>
        </li>
        <li>
          <a className="li_clz">Missing:</a> <a className="number_clz">{missing}</a>
        </li>
        <li>
          <a className="li_clz">Children Killed:</a> <a className="number_clz">{childrenKilled}</a>
        </li>
        <li>
          <a className="li_clz">Women Killed:</a> <a className="number_clz">{womenKilled}</a> 
        </li>
        <li>
          <a className="li_clz">Blessings:</a> <a className="number_clz">{blessings}</a>
        </li>
      </ul>
    </div>
  )
}

export default CardComponent
