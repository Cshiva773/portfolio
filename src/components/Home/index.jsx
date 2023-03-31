import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'
const Home=()=>{
  const [letterClass,setLetterClass]=useState('text-animate')
  const nameArray=['h','i','v','a','n','s','h',',']
  const jobArray=['a',' ','P','r','o','-','G','r','a','m','m','e','r']
  useEffect(() => {
    let tid=setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },4000)
    return ()=>{
      clearTimeout(tid)
    }
  },[])
  return(
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="dev" />
          <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={15} />
          </h1>
          <h2>Frontend Developer / C++ Programmer / Technophile</h2>
          <a href="mailto: greatshiva773@gmail.com" className='flat-button'>Contact Me</a>
        </div>
        <Logo />
      </div>
    </>
  )
}
export default Home 