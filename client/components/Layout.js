import React from 'react'
import Header from './Header'
/**
 * Layout
 * The layout of the webpage. 
 * It wraps the pages in an element with class container (which is used by the materialize.css library). 
 * It also shows the main header in every page.
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
const Layout = ({children}) => {
	return (<div className="container"><Header/>{children}</div>)
}

export default Layout