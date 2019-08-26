import React, { Component } from "react";
import moment from "moment";
import axios from '../axios';
import FilmButtons from './FilmButtons';

class Film extends Component {

  render() {
    const { createdAt, title, showed, state, year, length, imgUrl } = this.props.film;
    let classes = 'film card mb-3';
    if (!showed) classes += ' cardDisabled';

// badge
    let now = moment();
    let createdAtMoment = moment(createdAt);
    let difference = now.diff(createdAtMoment, "minutes");
    const badge = (difference < 10) ?
        <span className="badge badge-danger" style={{ margin: "1em"}}>
          New
        </span> :null;

    return (
      <div className={classes} style={{maxWidth: 540}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={imgUrl} className="card-img" alt={`${title} film`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}{badge}</h5>
              <p className="card-text">{state}</p>
              <p className="card-text">{year}</p>
              <p className="card-text">{length}</p>
              <div className="card-text">{this.renderDescription()}</div>
              <p className="card-text"><small className="text-muted">Created at {createdAt}</small></p>
              {console.log(this.props.film)}
              <FilmButtons film={this.props.film} onShow={this.handleShow} onRemove={this.handleRemove} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderDescription = () => {
    const { description } = this.props.film;
    if (!description) return null;

    return (
        <div className="card-text" dangerouslySetInnerHTML={{ __html: description }} />
    )
  };

  handleShow = async () => {
    console.log(this.props);
    console.log(this.props.film);
    console.log(this.props.film.id);
    console.log('1');
    const { showed } = this.props.film;
    console.log(showed);
    console.log('2');
    if( showed === true ) {
      console.log('3a');
      await axios.patch('/film/' + this.props.film.id, {
        showed: false
      });
      console.log('4a');
    } else {
      console.log('3b');
      await axios.patch('/film/' + this.props.film.id, {
        showed: true
      });
      console.log('4b');
    }
    console.log('5');
    this.props.onShow();
    console.log('6');
  };

  handleRemove = async () => {
    console.log(this.props);
    console.log(this.props.film);
    console.log(this.props.film.id);
    await axios.delete('/film/' + this.props.film.id);
    this.props.onRemove();
  };

}

export default Film;
