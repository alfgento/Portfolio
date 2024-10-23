import'./Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
    return (
      <>
        <ul className="menu">
            <li>
              <Link to="aboutMe" smooth duration={500} offset={-100}>About me</Link>
            </li>
            <li>
              <Link to="myProjects" smooth duration={500} offset={-100}>My Projects</Link>
            </li>
            <li><a href=''>Contact</a></li>
        </ul>
      </>
    )
  }
  
  export default Navbar