import React, { Component } from 'react';

class FilmButtons extends Component {
  render () {
    const { showed } = this.props.film;
    let showButton;
    if (!showed) {
      showButton = (
        <button type="button" className="btn btn-success float-right" onClick={this.props.onShow}>
          Show/Hide
        </button>
      ) 
    }

    return (
      <>
        <button type="button" className="btn btn-light" onClick={this.props.onRemove}>
          Delete
        </button>
        {showButton}
      </>
    )
  }
}

export default FilmButtons;
