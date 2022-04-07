import React from 'react'
import NavItem from './NavItem'
function NavigatorBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dashboard</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
        <div class="navbar-nav">
          <NavItem TabTitle="Products" route="/products"></NavItem>
          <NavItem TabTitle="Clients" route="/clients"></NavItem>
          <NavItem TabTitle="Orders" route="/orders"></NavItem>
        </div>
      
    </div>
  </nav>
)
}

export default NavigatorBar