import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

  render () {
    const { searchTerm, showSearch } = this.props;
    let search;
    if(showSearch){
      search = (
        <form className="form-inline my-2 my-lg-0 search">
          <input className="form-control mr-sm-2 searchInput" type="search" placeholder="Search"
                 aria-label="Search" onChange={this.props.onSearch} value={searchTerm} />
        </form>
      )
    }
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
          { search }
        </div>
      </nav>
    )
  }
}

export default Navbar
