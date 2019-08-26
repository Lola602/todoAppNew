import React, { Component } from "react";
import { Link } from 'react-router-dom';

import axios from '../axios';

import FilmButtons from './FilmButtons';

class Film extends Component {
  renderDescription = () => {
    const { description } = this.props.film;
    if (!description) return null;

    return (
      <div className="card-text" dangerouslySetInnerHTML={{ __html: description }} />
    )
  };

  handleShow = async () => {
    const { showed } = this.props.film;
    if( showed === true ) {
      await axios.patch('/film/' + this.props.film.id, {
        showed: false
      });
    } else {
      await axios.patch('/film/' + this.props.film.id, {
        showed: true
      });
    }
    this.props.onShow();
  };

  handleRemove = async () => {
    await axios.delete('/film/' + this.props.film.id);
    this.props.onRemove();
  };

  render() {
    const { createdAt, title, showed, state, year, length, imgUrl, id } = this.props.film;
    let classes = 'film card mb-3';
    if (!showed) classes += ' cardDisabled';

    return (
        <div className={classes} style={{maxWidth: 540}}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={imgUrl} className="card-img" alt={`${title} film`} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <Link to={`/film-detail/${id}`}>
                  <h5 className="card-title">{title}</h5>
                </Link>
                <p className="card-text">{state}</p>
                <p className="card-text">{year}</p>
                <p className="card-text">{length}</p>
                <div className="card-text">{this.renderDescription()}</div>
                <p className="card-text"><small className="text-muted">Created at {createdAt}</small></p>
                <FilmButtons film={this.props.film} onShow={this.handleShow} onRemove={this.handleRemove} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Film;
