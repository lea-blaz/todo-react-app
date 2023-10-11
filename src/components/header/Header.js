import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
    return(
      <header className='header-container'>
        <Link to='/'></Link>
        <h1>TO-DO List</h1>
        <nav className='nav-container'>
          <ul>

            
            <li><Link to='/'>ALL</Link></li>
            <li><Link to='/active'>ACTIVE</Link></li>
            <li><Link to='/completed'>COMPLETED</Link></li>
            
          </ul>
        </nav>
      </header>
    )
}