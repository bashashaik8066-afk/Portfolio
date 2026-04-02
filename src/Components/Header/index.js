import {Link} from 'react-router-dom'
import './index.css'

function Header() {
  return (
    <div>
      <nav className='navbar'>
      <h1 className='logo'>Basha Protofolio</h1>
      <ul className='nav-menu'>
        <li className='nav-link'>
          <Link className='nav-link' to="/">Home</Link>
        </li>
          <li className='nav-link'>
          <Link className='nav-link' to="/skills">Skills</Link>
        </li>
          <li className='nav-link'>
          <Link className='nav-link' to="/projects">Projects</Link>
        </li>
        <li className='nav-link'>
           <Link className='nav-link' to="/Contacts">Contacts</Link>
        </li>
       </ul>
       </nav>
</div>
  )
}

export default Header