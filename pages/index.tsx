import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import backgroundImage from '../public/photo/back.jpg'
import { useEffect, useRef, useState } from 'react'
import CardComponent from './CardComponent'

import  Zoom  from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ReactGA from 'react-ga'

export default function Home() {
  const allPhotoNumber = 25
  const mp3Url = '/gaza/hatha1.mp3' // Replace with the actual path to your MP3 file
  const audioRef = useRef()

  const statsData = {
    deathsToday: '+15k',
    missing: '+3.5k',
    childrenKilled: '+5.5k',
    womenKilled: '+3.1k',
    blessings: '+30k',
  }

  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  useEffect(() => {
    const audio: any = audioRef.current

    // Set the source and preload the audio
    audio.src = mp3Url
    audio.preload = 'false'
    audio.volume = 0.05
    // Play the audio when the component mounts
    audio.play()

    // Cleanup: pause the audio when the component unmounts
    return () => {
      audio.pause()
    }
  }, [mp3Url])
  return (
    <div className={styles.container}>
      <Head>
        <title>The truth</title>
        <link rel="icon" href="/gazaLogo.ico" />
      </Head>
      <audio ref={audioRef as any} src={mp3Url} preload="auto" />
      <CardComponent {...statsData} />
      <div
        className="d-flex flex-wrap"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Zoom
        overlayBgColorEnd="rgba(0, 0, 0, 0.85)"
        isOpen={isZoomed}
        setIsOpen={setIsZoomed}
      >
        <div key="first" className="pb-5 pt-5">
          <Image
            style={{ borderRadius: '50px' }}
            src="/gaza/now.webp"
            alt="Photo"
            width={1500}
            height={1000}
          />
        </div>
         </Zoom>
        {new Array(allPhotoNumber).fill(0).map((image: any, index: number) => (
          <div key={index} className="pb-5 pt-5">
            <Zoom
        overlayBgColorEnd="rgba(0, 0, 0, 0.85)"
        isOpen={isZoomed}
        setIsOpen={setIsZoomed}
      >
            <Image
              style={{ borderRadius: '50px' }}
              src={`/gaza/gaza${index}.jpg`}
              alt="Photo"
              width={1500}
              height={1000}
            />
              </Zoom>
          </div>
          
        ))}
      </div>

      <footer className={styles.footer}>
        <a>
          <span>
            <Image src="/gazaLogo.png" alt="Photo" width={100} height={10} />
          </span>
        </a>
      </footer>
    </div>
  )
}
