import React, { Component } from "react";

class FilmDetail extends Component {
    render() {
      const { title } = this.props.film;
      return (
      <>
        <p>{title}</p>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
        </div>
      </>
      )
    }
  }

export default FilmDetail;