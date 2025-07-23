// components/StatsGrid.tsx

import React from 'react'
import Image from 'next/image'
import styles from './StatsGrid.module.css'

interface StatItem {
  value: string
  label: string
  icon?: string 
}

interface StatsGridProps {
  stats: StatItem[]
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className={styles.grid}>
      {stats && stats.map((stat, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.value}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
          {stat.icon && (
            <div className={styles.icon}>
              <Image src={stat.icon} alt="icon" width={200} height={40} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default StatsGrid
