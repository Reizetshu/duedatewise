// Package
import {Link} from 'react-router-dom';

// Style
import '../assets/styles/Header.css';

// Image
import payment from '../assets/payment.png';

const Header = () => {
  return (
    <header>
        <div className='branding'>
        <img src={payment} alt = 'paymentlogo'/>
        <h3>Due Date Wise</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <Link className='link' to='/'>Home</Link>
                </li>
                <li>
                    <Link className='link' to='/add-bills'>Add Bills</Link>
                </li>
                <li>
                    <Link className='link' to='/pending-bills'>Pending Bills</Link>
                </li>
                <li>
                    <Link className='link' to='/paid-bills'>Paid Bills</Link>
                </li>
                <li>
                    <Link className='link login' to='/login'>Log In</Link>
                </li>
                <li>
                    <Link className='link register' to='/register'>Register</Link>
                </li>
            </ul>
        </nav>    
    </header>
  )
}

export default Header;