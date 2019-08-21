import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse flex">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Films
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add film
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
