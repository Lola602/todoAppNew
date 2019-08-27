import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { GoPlus } from "react-icons/go";
import Masonry from 'react-masonry-component';

import Film from "../components/Film";

class FilmList extends Component {

  render() {
    const films = this.props.films;
    const { searchTerm } = this.props;

    return (
        <div>
          <Masonry>
            <Link className="link-plus card plus todo mb-2" to="/add">
              <GoPlus className="plus" />
              Add new film
            </Link>
          </Masonry>

      <Masonry className="films">
        {films.filter(filmData => `${filmData.title} ${filmData.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0).map((filmData) => {
          const handleShowFilm = () => {
            filmData.showed === true ? filmData.showed = false : filmData.showed = true;
            this.props.onEdit(filmData);
          };

            const handleRemoveFilm = () => {
              this.props.onRemove(filmData);
            };

          return (
            <>
                <Film
                  film={filmData}
                  key={filmData.id}
                  onShow={handleShowFilm}
                  onRemove={handleRemoveFilm}
                />
            </>
          );
        })}
      </Masonry>
     </div>
    );
  }
}

export default FilmList;
