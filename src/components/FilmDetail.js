import React, { Component } from "react";

class FilmDetail extends Component {
    render() {
      const { title } = this.props.film;
      return (
      <p>{title}</p>
      )
    }
  }

export default FilmDetail;