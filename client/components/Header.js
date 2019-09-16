import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Header
 * The main header of the Eventful webpage
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
const Header = () => {
    return (<Link to="/">
	    		<header className="main-header">
					<h2 className="main-title">Eventful</h2>
					<h5>Discover events near you</h5>
				</header>
			</Link>);
}

export default Header