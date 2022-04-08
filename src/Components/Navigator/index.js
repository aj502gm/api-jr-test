import React from 'react'
import NavItem from './NavItem'
function NavigatorBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Dashboard</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
        <div className="navbar-nav">
          <NavItem TabTitle="Products" route="/products"></NavItem>
          <NavItem TabTitle="Clients" route="/clients"></NavItem>
          <NavItem TabTitle="Orders" route="/orders"></NavItem>
        </div>
      
    </div>
  </nav>
)
}

export default NavigatorBar