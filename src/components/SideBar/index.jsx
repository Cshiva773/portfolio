import {Link,NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faHome,faUser } from '@fortawesome/free-solid-svg-icons'

const SideBar=()=>(
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      
      <img src={LogoS} alt="logo" />
      
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#ffffff" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#ffffff" />
      </NavLink>
      
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/shivansh-chauhan-8677b4228/'>
          <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href='https://github.com/Cshiva773'>
          <FontAwesomeIcon icon={faGithub} color="#ffffff" />
        </a>
      </li>
    </ul>
  </div>
)
export default SideBar