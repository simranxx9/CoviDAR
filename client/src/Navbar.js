import './css/Navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);



    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container '>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>


                        {/* <img src={imag} width="210px" /> */}
            LOGO



          </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
              </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/news'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                News
              </Link>
                        </li>

                        <li className='nav-item'>
                            <Link
                                to='/coviindia'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                CoviIndia
              </Link>
                        </li>


                        <li className='nav-item'>
                            <Link
                                to='/query'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Query
              </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/faqs'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                FAQS
              </Link>
                        </li>



                    </ul>

                </div>

            </nav>
        </>
    )
}

export default Navbar
