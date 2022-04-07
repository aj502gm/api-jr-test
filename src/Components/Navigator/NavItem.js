import React from 'react'
import { Link, Router } from "react-router-dom";

function NavItem({TabTitle, route}) {
  return (
    <Link to={route} className='nav-item nav-link active' >
           {TabTitle}
    </Link>
  )
}

export default NavItem