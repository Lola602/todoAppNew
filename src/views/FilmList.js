import React, { Component } from "react";
import Masonry from 'react-masonry-component';

import Film from "../components/Film";

class FilmList extends Component {

  state = {
    searchTerm: ''
  };

  //react event listener
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value })
  };

  render() {
    const films = this.props.films;
    
    return (
      <Masonry className="films">
        {films.map((filmData) => {
          const handleShowFilm = () => {
            filmData.showed === true ? filmData.showed = false : filmData.showed = true;
            this.props.onEdit(filmData);
          };

          const handleRemoveFilm = () => {
            this.props.onRemove(filmData);
          };

          return (
            <>
              <form className="form-inline my-2 my-lg-0 search">
                <input className="form-control mr-sm-2 searchInput" type="search" placeholder="Search"
                       aria-label="Search" onChange={this.handleSearchTermChange} value={this.state.searchTerm} />
              </form>

              {films.filter(film => `${film.title} ${film.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0).map(film =>
                <Film
                  film={filmData}
                  key={filmData.id}
                  onShow={handleShowFilm}
                  onRemove={handleRemoveFilm}
                />)
              }
            </>
          )
        })}
      </Masonry>
    );
  }
}

export default FilmList;
