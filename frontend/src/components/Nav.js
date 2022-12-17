import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        
        <nav class="navbar navbar-expand-lg bg-light " >
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" >
      <h1 class='ms-3'>Antas </h1></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item ">
         <Link to="/" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item ">
          <Link to="/about" className="nav-link" >About</Link>
        </li>
        <li class="nav-item">
          <Link to="/what" class="nav-link" >What We Do</Link>
        </li>

        <li class="nav-item">
          <Link to="/why" class="nav-link" >Why Choose Us</Link>
        </li>
        <li class="nav-item">
          <Link to="/location" class="nav-link" >Our Locations</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link" >Contact</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Nav
