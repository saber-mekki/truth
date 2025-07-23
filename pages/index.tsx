import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import backgroundImage from '../public/photo/back.jpg'
import { useEffect, useRef, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import ReactGA from 'react-ga'

import CardComponent from './CardComponent'

import 'react-medium-image-zoom/dist/styles.css'

export default function Home() {
  const allPhotoNumber = 26
  const mp3Url = '/gaza/hatha1.mp3'
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isZoomed, setIsZoomed] = useState<boolean>(false)
  const [statsData, setStatsData] = useState({
    deathsToday: '',
    childrenKilled: '',
    womenKilled: '',
    press:'',
    civilDefence: '',
    medical:'',
    injured:'',
    massacres:'',
    lastDailyUpdate:''

  })

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.src = mp3Url
      audio.preload = 'false'
      audio.volume = 0.05
      audio.play()

      return () => {
        audio.pause()
      }
    }
  }, [mp3Url])

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://data.techforpalestine.org/api/v2/summary.json')
        const data = await response.json()
        console.log({data})
        setStatsData({
          lastDailyUpdate:`${data?.lastDailyUpdate?.toLocaleString() || ''}`,
          massacres:`${data?.massacres?.toLocaleString() || ''}`,
          injured: `${data?.injured.total?.toLocaleString() || ''}`,
          deathsToday: `${data?.killed.total?.toLocaleString() || ''}`,
          childrenKilled: `${data?.killed.children?.toLocaleString() || '+20k'}`,
          womenKilled: `${data?.killed.women?.toLocaleString() || '+15k'}`,
          press: `${data?.killed.press?.toLocaleString() || '+37k'}`,
          civilDefence: `${data?.killed.civilDefence?.toLocaleString() || '+37k'}`,
          medical:  `${data?.killed.medical?.toLocaleString() || '+37k'}`,
        })
      } catch (error) {
        console.error('Error fetching summary data:', error)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>The truth</title>
        <link rel="icon" href="/gazaLogo.ico" />
      </Head>

      <audio ref={audioRef} src={mp3Url} preload="auto" />
      <CardComponent {...statsData} />

      <div
        className="slide-container"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '20px',
        }}
      >
        {Array.from({ length: allPhotoNumber }).map((_, index) => (
          <Zoom
            key={index}
            overlayBgColorEnd="rgba(0, 0, 0, 0.85)"
            isOpen={isZoomed}
            setIsOpen={setIsZoomed}
          >
            <Image
              src={`/gaza/gaza${index}.jpg`}
              alt="Gaza Photo"
              width={200}
              height={300}
              style={{
                borderRadius: '20px',
                cursor: 'pointer',
              }}
            />
          </Zoom>
        ))}
      </div>

      <footer className={styles.footer}>
        <a>
          <span>
            <Image src="/gazaLogo.png" alt="Logo" width={100} height={10} />
          </span>
        </a>
      </footer>
    </div>
  )
}
