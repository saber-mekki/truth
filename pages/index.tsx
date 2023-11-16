import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import backgroundImage from '../public/photo/back.jpg'
import { useEffect, useRef } from 'react'

export default function Home() {
  const allPhotoNumber = 5
  const mp3Url = '/gaza/hatha.mp3' // Replace with the actual path to your MP3 file
  const audioRef = useRef()

  useEffect(() => {
    const audio: any = audioRef.current

    // Set the source and preload the audio
    audio.src = mp3Url
    audio.preload = 'auto'

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
        <title>the truth</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <audio ref={audioRef as any} src={mp3Url} preload="auto" />
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
        {new Array(allPhotoNumber).fill(0).map((image: any, index: number) => (
          <div key={index} className="pb-5 pt-5">
            <Image
              style={{ borderRadius: '50px' }}
              src={`/gaza/gaza${index}.jpg`}
              alt="Photo"
              width={1500}
              height={1000}
            />
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <a>
          Powered by{` `}Saber
          <span>
            <Image src="/gazaLogo.png" alt="Photo" width={100} height={10} />
          </span>
        </a>
      </footer>
    </div>
  )
}
