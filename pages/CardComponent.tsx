// components/CardComponent.tsx

import React from 'react'

interface CardProps {
  deathsToday: any
  missing: any
  childrenKilled: any
  womenKilled: any
  Wounded: any
  studentsKilled: any
  studentsWounded: any
}
const CardComponent: React.FC<CardProps> = ({
  deathsToday,
  missing,
  childrenKilled,
  womenKilled,
  Wounded,
  studentsKilled,
  studentsWounded,
}) => {
  return (
    <div className="card">
      <ul>
        <li>
          <a className="li_clz">Number of deaths :</a>
          <a className="number_clz">{deathsToday}</a>
        </li>
        <li>
          <a className="li_clz">Number of missings :</a>
          <a className="number_clz">{missing}</a>
        </li>
        <li>
          <a className="li_clz">Number of children Killed :</a>{' '}
          <a className="number_clz">{childrenKilled}</a>
        </li>
        <li>
          <a className="li_clz">Number of women Killed :</a>{' '}
          <a className="number_clz">{womenKilled}</a>
        </li>
        <li>
          <a className="li_clz">Number of Wounded :</a>
          <a className="number_clz">{Wounded}</a>
        </li>
        <li>
          <a className="li_clz">Number of students Killed :</a>
          <a className="number_clz">{studentsKilled}</a>
        </li>
        <li>
          <a className="li_clz">Number of students Wounded :</a>
          <a className="number_clz">{studentsWounded}</a>
        </li>
      </ul>
    </div>
  )
}

export default CardComponent
