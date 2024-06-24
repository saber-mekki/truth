// components/CardComponent.tsx

import React from 'react'
import eng from 'lang/eng.json' // Import English translations
import fr from 'lang/fr.json' // Import French translations
interface CardProps {
  deathsToday: any
  missing: any
  childrenKilled: any
  womenKilled: any
  Wounded: any
  studentsKilled: any
  studentsWounded: any
  lang?: 'eng' | 'fr'
}

const CardComponent: React.FC<CardProps> = ({
  deathsToday,
  missing,
  childrenKilled,
  womenKilled,
  Wounded,
  studentsKilled,
  studentsWounded,
  lang = 'eng',
}) => {
  const language = lang === 'fr' ? fr : eng
  return (
    <div className="card">
      <ul>
        <li className="list-item">
          <a className="li_clz">{language.deathsToday}</a>
          <a className="number_clz">{deathsToday}</a>
        </li>
        <li className="list-item">
          <a className="li_clz">{language.missing}</a>
          <a className="number_clz">{missing}</a>
        </li>
        <br />
        <br />
        <li className="list-item">
          <a className="li_clz">{language.childrenKilled}</a>{' '}
          <a className="number_clz">{childrenKilled}</a>
        </li>
        <li className="list-item" id="x">
          <a className="li_clz">{language.womenKilled}</a>{' '}
          <a className="number_clz"> {womenKilled}</a>
        </li>
        <li className="list-item">
          <a className="li_clz">{language.Wounded}</a>
          <a className="number_clz"> {Wounded}</a>
        </li>
        <li className="list-item">
          <a className="li_clz">{language.studentsKilled}</a>
          <a className="number_clz">{studentsKilled}</a>
        </li>
        <li className="list-item">
          <a className="li_clz">{language.studentsWounded}</a>
          <a className="number_clz">{studentsWounded}</a>
        </li>
      </ul>
    </div>
  )
}

export default CardComponent
