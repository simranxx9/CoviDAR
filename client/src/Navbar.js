import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">CORONA</Link>
                </li>
                <li>
                    <Link to="/news">NEWS</Link>
                </li>
                <li>
                    <Link to="/coviindia">Covid India</Link>
                </li>
                <li>
                    <Link to="/faqs">FAQS</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
