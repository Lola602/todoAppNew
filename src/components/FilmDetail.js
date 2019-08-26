import React, { Component } from "react";

class FilmDetail extends Component {
    render() {
      const { title, year, description, trailer } = this.props.film;
      return (
      <>
        <div className="flex">
            <h1>{title}</h1>
            <p>{year}</p>
          <p>{description}</p>
        </div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={trailer} allowFullScreen></iframe>
        </div>
      </>
      )
    }
  }

export default FilmDetail;