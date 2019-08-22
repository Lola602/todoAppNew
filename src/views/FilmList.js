import React, { Component } from "react";
import Masonry from 'react-masonry-component';

import Film from "../components/Film";

class FilmList extends Component {

  render() {
    const films = this.props.films;
    const { searchTerm } = this.props;
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

              {films.filter(film => `${film.title} ${film.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0).map(film =>
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
