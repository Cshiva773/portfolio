import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
const About=()=>{
  const [letterClass,setLetterClass]=useState('text-animate')
  useEffect(() => {
    let tid=setTimeout(()=>{
      setLetterClass('text-animate-hover')
    },3000)
    return ()=>{
      clearTimeout(tid)
    }
  },[])
  return(
    <>
      <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A','b','O','u','t',' ','m','E']}  
            idx={15}
          />
          <p>
            I am an enthusiast in the field of software engineering and artificial intelligence and also                    possess good communication skills and problem-solving skills.
          </p>
          <p>
            I also have a deep interest in competitive programming and blockchain development.
          </p>
        </h1>
      </div>
      <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>  
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default About