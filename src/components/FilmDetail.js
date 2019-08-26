import React, { Component } from "react";

class FilmDetail extends Component {
  render(){
    const { imgUrl, title, description, genre, state, year, length } = this.props.films;
    let classes = 'film card mb-3';
    if (!showed) classes += ' cardDisabled';

    return(
      <div className={classes} style={{maxWidth: 540}}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={imgUrl} className="card-img" alt={`${title} film`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{state}</p>
              <p className="card-text">{year}</p>
              <p className="card-text">{length}</p>
              <div className="card-text">{this.renderDescription()}</div>
              <p className="card-text"><small className="text-muted">Created at {createdAt}</small></p>
              <div>
                <iframe
                  title="YouTube Video Frame"
                  src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <FilmButtons film={this.props.film} onShow={this.handleShow} onRemove={this.handleRemove} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilmDetail;